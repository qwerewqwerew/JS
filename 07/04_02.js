$(function () {
  $(window).scroll(function () {
    var sct = $(window).scrollTop();
    if (sct >= 100) {
      $(".article1").addClass("on");
    }
    if (sct >= 500) {
      $(".left1").addClass("on");
    }
    if (sct >= 1000) {
      $(".right1").addClass("on");
    }
  });
});
