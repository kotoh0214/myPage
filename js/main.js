$(document).ready(function () {
  hsize = $(window).height();
  $("header").css("height", hsize + "px");
});
$(window).resize(function () {
  hsize = $(window).height();
  $("header").css("height", hsize + "px");
});
