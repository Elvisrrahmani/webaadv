const songs = [
    { name: 'song1', displayName: 'Lost in Dreams', artist: 'Nova', cover: 'cover1.jpg' },
    { name: 'song2', displayName: 'City Lights', artist: 'Skyline', cover: 'cover2.jpg' },
    { name: 'song3', displayName: 'Morning Glow', artist: 'Sunbeam', cover: 'cover3.jpg' }
  ];
  
  let songIndex = 0;
  let isPlaying = false;
  let isShuffle = false;
  let isRepeat = false;
  let playedSongs = [];
  
  const audio = document.getElementById('audio');
  const playBtn = document.getElementById('play');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const shuffleBtn = document.getElementById('shuffle');
  const repeatBtn = document.getElementById('repeat');
  const progress = document.getElementById('progress');
  const progressContainer = document.getElementById('progress-container');
  const volume = document.getElementById('volume');
  const title = document.getElementById('title');
  const artist = document.getElementById('artist');
  const cover = document.getElementById('cover');
  const currentTimeEl = document.getElementById('current-time');
  const durationEl = document.getElementById('duration');
  const playlist = document.getElementById('playlist');
  const themeToggle = document.getElementById('theme-toggle');
  
  function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    audio.src = `music/${song.name}.mp3`;
    cover.src = `images/${song.cover}`;
  }
  
  function playSong() {
    isPlaying = true;
    playBtn.textContent = '⏸️';
    audio.play();
    document.querySelector('.details img').parentElement.classList.add('playing');
  }
  
  function pauseSong() {
    isPlaying = false;
    playBtn.textContent = '▶️';
    audio.pause();
    document.querySelector('.details img').parentElement.classList.remove('playing');
  }
  
  playBtn.addEventListener('click', () => isPlaying ? pauseSong() : playSong());
  
  nextBtn.addEventListener('click', nextSong);
  prevBtn.addEventListener('click', prevSong);
  
  function nextSong() {
    if (isShuffle) {
      shuffleSong();
    } else {
      songIndex = (songIndex + 1) % songs.length;
    }
    loadSong(songs[songIndex]);
    playSong();
    updatePlaylist();
  }
  
  function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
    updatePlaylist();
  }
  
  shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('active');
  });
  
  repeatBtn.addEventListener('click', () => {
    isRepeat = !isRepeat;
    repeatBtn.classList.toggle('active');
  });
  
  audio.addEventListener('ended', () => {
    isRepeat ? playSong() : nextSong();
  });
  
  function shuffleSong() {
    if (playedSongs.length === songs.length) playedSongs = [];
    let next;
    do {
      next = Math.floor(Math.random() * songs.length);
    } while (playedSongs.includes(next));
    playedSongs.push(next);
    songIndex = next;
  }
  
  audio.addEventListener('timeupdate', updateProgress);
  
  function updateProgress(e) {
    if (audio.duration) {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      progress.style.width = `${progressPercent}%`;
  
      currentTimeEl.textContent = formatTime(audio.currentTime);
      durationEl.textContent = formatTime(audio.duration);
    }
  }
  
  progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
  });
  
  volume.addEventListener('input', (e) => {
    audio.volume = e.target.value;
  });
  
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
  
  function updatePlaylist() {
    document.querySelectorAll('.song').forEach((el, index) => {
      el.classList.toggle('active', index === songIndex);
    });
  }
  
  function buildPlaylist() {
    songs.forEach((song, index) => {
      const div = document.createElement('div');
      div.classList.add('song');
      div.textContent = `${song.displayName} - ${song.artist}`;
      div.addEventListener('click', () => {
        songIndex = index;
        loadSong(songs[songIndex]);
        playSong();
        updatePlaylist();
      });
      playlist.appendChild(div);
    });
  }
  
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    themeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌑';
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      isPlaying ? pauseSong() : playSong();
    }
    if (e.code === 'ArrowRight') nextSong();
    if (e.code === 'ArrowLeft') prevSong();
  });
  
  // INIT
  loadSong(songs[songIndex]);
  buildPlaylist();
  updatePlaylist();
  