// Creating a namespace for the project
const connectr = {};

// Organizing init function to pass to document ready
connectr.init = () => {
  console.log("UsamaDude");
};

// Document ready function
$(function () {
  connectr.init();
});
