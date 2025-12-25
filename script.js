var imgs = ['images/1.avif','images/2.avif','images/3.avif','images/4.avif','images/5.avif'];
var container = document.getElementById('img');
var selected = 0;
var timer;

function nextImg() {
    selected++;
    if (selected === imgs.length) selected = 0;
    container.src = imgs[selected];
}

function autoSlide() {
    timer = setInterval(nextImg, 3000);
}


container.addEventListener("mouseenter", function () {
    clearInterval(timer);
});


container.addEventListener("mouseleave", function () {
    autoSlide();
});

window.onload = function () {
    autoSlide();
};