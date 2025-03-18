document.addEventListener("DOMContentLoaded", function() {
    let courses = document.querySelectorAll('.extra-details');
    courses.forEach(details => details.style.display = 'none');
});

function toggleCourseDetails(courseElement) {
    let details = courseElement.querySelector('.extra-details');
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

function searchCourses() {
    let input = document.querySelector('.search-bar').value.toLowerCase();
    let courses = document.querySelectorAll('.course');
    
    courses.forEach(course => {
        let title = course.querySelector('h2').innerText.toLowerCase();
        let description = course.querySelector('.description').innerText.toLowerCase();
        let details = course.querySelector('.extra-details');
        
        if (title.includes(input) || description.includes(input)) {
            course.style.display = "block";
            details.style.display = "block"; // Ensure extra details are visible when searching
        } else {
            course.style.display = "none";
        }
    });
}