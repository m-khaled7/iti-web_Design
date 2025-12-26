//slider
let imgs = ['images/1.jpg', 'images/3.jpg', 'images/17.jpg', 'images/36.jpg', 'images/47.jpg', 'images/62.jpg', 'images/72.jpg', 'images/76.avif'];
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
    loadProducts()
};

async function loadProducts() {
    try {
        let product_grid = document.getElementById("productsGrid")

        let response = await fetch(`http://127.0.0.1:3000/products`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        if (result.length == 0) {
            alert("unable to connect to server")
            return
        }

        result.forEach(element => {
            product_grid.innerHTML += `
            <div class="product-card">
                <div class="product-image">
                  <img src="/images/${element.image_url}" alt="iPhone 14 Pro" />
                </div>
                <h4>${element.name}</h4>
                <p class="price">EGP ${element.price}</p>
                <button class="btn-buy">Details</button>
            </div>`
        });

        



    } catch (e) {
        console.error('There was a problem with the fetch operation:', error);
    }

}