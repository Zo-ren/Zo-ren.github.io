const darkModeButton = document.getElementById("darkModeButton");
const lightModeButton = document.getElementById("lightModeButton");
const clickMeButton = document.getElementById("helloYou");
const video = document.getElementById("video");
clickMeButton.textContent = "Hello YOU";

darkModeButton.addEventListener("click", function () {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    clickMeButton.style.display = "inline-block";
});

lightModeButton.addEventListener("click", function () {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    clickMeButton.style.display = "none";
    video.style.display = "none";
    video.pause();
    video.currentTime = 0;
});

clickMeButton.addEventListener("click", function () {
    video.style.display = "block";
    video.play();
});
