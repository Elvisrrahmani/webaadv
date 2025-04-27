// Filter job listings based on selected department and location
function filterJobs() {
    const jobType = document.getElementById("jobType").value;
    const location = document.getElementById("location").value;
    const jobs = document.querySelectorAll(".job");
    
    jobs.forEach(job => {
        const jobDataType = job.getAttribute("data-job-type");
        const jobLocation = job.getAttribute("data-location");

        if ((jobType === "all" || jobDataType === jobType) && 
            (location === "all" || jobLocation === location)) {
            job.style.display = "block";
        } else {
            job.style.display = "none";
        }
    });
}

// Open application modal
