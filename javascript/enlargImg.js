/* Script to enlarge images upon clicking them */
document.addEventListener("DOMContentLoaded", function() { 

    const images = document.querySelectorAll("img");

    images.forEach(image => {
        image.addEventListener("click", function() {
            console.log("Image clicked");
            this.classList.toggle("enlarged");
        });
    });
}); 
