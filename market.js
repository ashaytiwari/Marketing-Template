function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
function openOverlay(){
  document.getElementById("categories").style.height = "100%"
}
function closeOverlay(){
  document.getElementById("categories").style.height = "0%"
}
