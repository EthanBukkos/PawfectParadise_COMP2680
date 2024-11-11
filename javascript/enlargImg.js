document.getElementById("photo1").addEventListener("click", function() {
    if (this.style.transform == "scaled(2)") {
        this.style.transform = "scale(1)";
    } else {
        this.style.transform = "scale(2)";
    }
});