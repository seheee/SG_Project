/*var slideIndex = 1;
console.log(document.getElementsByClassName("dot"));
var dots = document.getElementsByClassName("dot");
console.log(dots);
for (i=0; i<dots.length; i++) {
  console.log(dots[i]);
  dots[i].addEventListener("click", currentSlide(i+1));
}
document.getElementsByClassName("dot").addEventListener("click", currentSlide(2));
showSlides(slideIndex);*/
var slideIndex;

function showSlides(n) {
  console.log(n);
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log("slide",slideIndex);  
  slides[slideIndex-1].style.display = "block";
  
  dots[slideIndex-1].className += " active";
}

/*function plusSlides(n) {
  showSlides(slideIndex += n);
}*/

function plusSlides() {
  showSlides(slideIndex += 1);
}
function minusSlides() {
  showSlides(slideIndex -= 1);
}

/*function currentSlide(n) {
  console.log("current1");
  showSlides(slideIndex = n);
}*/ 

function currentSlide1() {
  console.log("current1");
  showSlides(slideIndex = 1);
}
function currentSlide2() {
  console.log("current2");
  showSlides(slideIndex = 2);
}
function currentSlide3() {
  console.log("current3");
  showSlides(slideIndex = 3);
}
function currentSlide4() {
  console.log("current4");
  showSlides(slideIndex = 4);
}

function main() {
  console.log("main");
  slideIndex = 1;
  console.log(slideIndex);
  showSlides(slideIndex);
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementsByClassName("dot")[0].addEventListener('click',currentSlide1);
  document.getElementsByClassName("dot")[1].addEventListener('click',currentSlide2);
  document.getElementsByClassName("dot")[2].addEventListener('click',currentSlide3);
  document.getElementsByClassName("dot")[3].addEventListener('click',currentSlide4);

  for(i=0; i<4; i++) {
    document.getElementsByClassName('prev')[i].addEventListener('click',minusSlides);
  }
  for(i=0; i<4; i++) {
    document.getElementsByClassName('next')[i].addEventListener('click',plusSlides);
  }
  main();
});
