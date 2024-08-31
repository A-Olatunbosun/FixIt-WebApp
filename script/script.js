let = navbarMenu = document.getElementById("navbarMenu");
navbarMenu.style.maxHeight = "0px";

function toggleMenu() {
  navbarMenu.style.maxHeight == "0px"
    ? (navbarMenu.style.maxHeight = "fit-content")
    : (navbarMenu.style.maxHeight = "0px");
}
