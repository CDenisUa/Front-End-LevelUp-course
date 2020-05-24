let button = document.querySelector("#button_up");
if (pageYOffset == window.pageXOffset * window.innerHeight) {
    button.style.display = "block";
    console.log(pageYOffset)
}