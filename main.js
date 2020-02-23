const arrowbtn = document.getElementById("arrow-down-btn");
const aboutme = document.getElementById("about-me");

arrowbtn.addEventListener("click", function() {
  aboutme.scrollIntoView(true);
});

if (window.matchMedia('(max-width: 960px)').matches) {
  const videoElement = document.getElementById("bg-video");
  videoElement.pause();
  videoElement.removeAttribute('src');
  videoElement.load();
}
