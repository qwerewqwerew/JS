addEventListener("load", function () {
  addEventListener("scroll", function () {
    // console.log(`pageYOffset:${pageYOffset}, scrollY:${scrollY}`);
    if (pageYOffset >= 100 || scrollY >= 100) {
      document.querySelector(".article1").classList.add("on");
    }
    if (pageYOffset >= 400 || scrollY >= 400) {
      document.querySelector(".left1").classList.add("on");
    }
    if (pageYOffset >= 900 || scrollY >= 900) {
      document.querySelector(".right1").classList.add("on");
    }
  });
});
