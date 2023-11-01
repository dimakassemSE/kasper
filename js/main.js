

/*
// Start Landing Section
*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls for Action
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }   
    document.getElementsByClassName("bullets");
    slides[slideIndex - 1].style.display = "block";    
    document.getElementById("circl" + slideIndex).classList.add("active");   
    let hide;
    slideIndex == 1 ? hide = slideIndex + 1 : hide = slideIndex - 1;
    document.getElementById("circl" + hide).classList.remove("active");
}

/*
// End Landing Section
*/