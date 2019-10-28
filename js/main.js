function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "options") {
        x.className += " responsive";
    } else {
        x.className = "options";
    }
}

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").style.padding = "5px 10px";
        document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("header").style.padding = "10px 10px";
        document.getElementById("logo").style.fontSize = "30px";
    }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function appendMailTo() {
    let message = document.getElementById("mailMessage").value;
    let subject = document.getElementById("mailSubject").value;
    console.log(subject);
    console.log(message);

    let mailToAttr = document.getElementById("sendMail");
    mailToAttr.setAttribute("href", "mailto:ballenasfra.ne08@gmail.com?subject=" + subject + "&body=" + message);
}

let date = new Date();
let yearPos = document.getElementById("getYear");
let currYear = date.getFullYear();
yearPos.innerHTML = currYear;