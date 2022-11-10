const carousel = document.querySelector(".carousel");

const dragging = (e) => {
    carousel.scrollLeft = e.pageX;
}

carousel.addEventListener("mousemove", dragging);