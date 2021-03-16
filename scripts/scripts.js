// Creating a namespace for the project
const connectr = {};

// Organizing init function to pass to document ready
connectr.init = () => {
  AOS.init();
  // connectr.slideshow();
  connectr.toggleTour(".imagesButton", ".imagesContainer");
  connectr.toggleTour(".virtualButton", ".virtualContainer");
  connectr.closeWindow(".closeImages", ".imagesContainer");
  connectr.closeWindow(".closeVirtual", ".virtualContainer");
};

// connectr.slideshow = () => {
//   $(".main-carousel").flickity({
//     groupCells: true,
//   });
// };

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

// Document ready function
$(function () {
  connectr.init();
  console.log("Usama");
});
