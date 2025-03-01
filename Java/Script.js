document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById("carousel");
    let index = 0;
    setInterval(() => {
        index = (index + 1) % 5;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
});
