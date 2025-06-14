let is24Hour = false;

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  let ampm = '';
  if (!is24Hour) {
    ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
  }

  const hourStr = hours.toString().padStart(2, '0');
  document.getElementById('time').textContent = `${hourStr}:${minutes}:${seconds}`;
  document.getElementById('ampm').textContent = is24Hour ? '' : ampm;

  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  document.getElementById('date').textContent = `${day}, ${month} ${date}, ${year}`;
}

document.getElementById('toggle-format').addEventListener('click', () => {
  is24Hour = !is24Hour;
  document.getElementById('toggle-format').textContent =
    is24Hour ? 'Switch to 12-Hour' : 'Switch to 24-Hour';
  updateClock();
});

document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('light');
});

updateClock();
setInterval(updateClock, 1000);
