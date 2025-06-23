// Run JavaScript after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Cache all necessary elements for better performance
  const navItems = document.querySelectorAll('.nav-links li');
  const sections = document.querySelectorAll('.section');
  const exploreCoursesBtn = document.getElementById('explore-courses');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const addCourseBtn = document.getElementById('add-course-btn');
  const coursesContainer = document.getElementById('courses-container');

  // Navigation logic: Switch between Home, Courses, and About sections on nav link click
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetSectionId = item.getAttribute('data-section');
      sections.forEach(section => {
        section.classList.toggle('active', section.id === targetSectionId);
      });
    });
  });

  // "Explore Courses" Button: Redirects to the Courses section
  exploreCoursesBtn.addEventListener('click', () => {
    sections.forEach(section => {
      section.classList.toggle('active', section.id === 'courses-section');
    });
  });

  // Dark/Light Mode Toggle: Switch the theme by toggling a CSS class on the body element
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Dynamic Course Addition: Allows adding new courses to the Courses section
  addCourseBtn.addEventListener('click', () => {
    const courseName = prompt("Enter the course name:");
    if (courseName && courseName.trim() !== "") {
      const newCourseCard = document.createElement('div');
      newCourseCard.classList.add('course-card');
      newCourseCard.innerHTML = `
        <h3>${courseName.trim()}</h3>
        <div class="progress-bar">
          <div class="progress" style="width: 0%;"></div>
        </div>
      `;
      coursesContainer.appendChild(newCourseCard);
    } else {
      alert("Please enter a valid course name.");
    }
  });
});