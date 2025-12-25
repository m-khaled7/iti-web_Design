//slider
let imgs = ['images/1.avif','images/2.avif','images/3.avif','images/4.avif','images/5.avif'];
let container = document.getElementById('img');
let selected = 0;
let timer;

function nextImg() {
    selected++;
    if (selected === imgs.length) selected = 0;
    container.src = imgs[selected];
}

function startSlider() {
    timer = setInterval(nextImg, 3000);
}


container.addEventListener("mouseenter", function () {
    clearInterval(timer);
});


container.addEventListener("mouseleave", function () {
    startSlider();
});

window.onload = function () {
    startSlider();
};