// Creating a namespace for the project
const connectr = {};

// Organizing init function to pass to document ready
connectr.init = () => {
  AOS.init();
  // connectr.toggleTour(".imagesButton", ".imagesContainer");
  // connectr.toggleTour(".virtualButton", ".virtualContainer");
  // connectr.closeWindow(".closeImages", ".imagesContainer");
  // connectr.closeWindow(".closeVirtual", ".virtualContainer");
};

connectr.toggleTour = (selector, container) => {
  $(selector).click(function () {
    $(container).toggle(500, "linear");
  });
};

connectr.closeWindow = (selector, container) => {
  $(selector).click(function () {
    $(container).hide(500);
  });
};

connectr.profile = () => {
  $("#uname").value = "";
  let name = $("#uname").value;
  let result = ($(".result").innerHTML = name);
  console.log(result);
  alert(result);
};

// Document ready function
$(function () {
  connectr.init();
});

// Code for slideshow in Explore section //

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
