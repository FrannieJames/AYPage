window.myFunction = function() {
  var x = document.getElementById("myTopnav");
  if (x.className === "options") {
    x.className += " responsive";
  } else {
    x.className = "options";
  }
}