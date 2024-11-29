// Code written by Ethan Bukkos

const dropdown_list = document.querySelector("#dropdown_list");
const dropdown_list_content = document.querySelector("#dropdown_list_content");

dropdown_list.addEventListener("mouseover", function() {
    dropdown_list_content.style.display = "block";
});

dropdown_list.addEventListener("mouseout", function() {
    dropdown_list_content.style.display = "none";
});
