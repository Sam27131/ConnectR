// Creating a namespace for the project
const connectr = {};

// Organizing init function to pass to document ready
connectr.init = () => {
  connectr.slideshow();
};

connectr.slideshow = () => {
  $(".main-carousel").flickity({
    groupCells: true,
  });
};

// Document ready function
$(function () {
  connectr.init();
});
