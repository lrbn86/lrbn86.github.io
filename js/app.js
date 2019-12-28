const aboutButton = document.getElementById("nav-about");
const projectsButton = document.getElementById("nav-projects");
const aboutSection = document.getElementById("about-section");
const projectsSection = document.getElementById("projects-section");
aboutButton.addEventListener("click", function() {
  aboutSection.style.display = "block";
  projectsSection.style.display = "none";
});

projectsButton.addEventListener("click", function() {
  projectsSection.style.display = "block";
  aboutSection.style.display = "none";
});
