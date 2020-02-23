const arrowbtn = document.getElementById("arrow-down-btn");
const aboutme = document.getElementById("about-me");

arrowbtn.addEventListener("click", function() {
  aboutme.scrollIntoView(true);
});
