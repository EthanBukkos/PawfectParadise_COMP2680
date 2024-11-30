var slider = document.getElementById("range_slider");
var slider_value = document.getElementById("slider_value");

slider.addEventListener("input", function() {
    slider_value.textContent = "$" + slider.value;
});