var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("news");
//   var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
// *
var slideIndex2 = 1;
showSlides1(slideIndex2);

function plusSlides1(n) {
  showSlides1(slideIndex2 += n);
}

function currentSlide(n) {
  showSlides1(slideIndex2 = n);
}

function showSlides1(n) {
  var x;
  var slides1 = document.getElementsByClassName("matches");
//   var dots = document.getElementsByClassName("dot");
  if (n > slides1.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides1.length}
  for (x = 0; x < slides1.length; x++) {
      slides1[x].style.display = "none";  
  }
  slides1[slideIndex2-1].style.display = "block"; 
}