/*
document.addEventListener("DOMContentLoaded", () => {
  var sub = document.querySelector(".sub");
  sub.style.transition = "height .5s";
  sub.style.overflow = "hidden";
  sub.style.height = "0px";
  document.querySelector(".gnb>li>a").addEventListener("click", function () {
    var newSub = this.nextElementSibling.style.height;
    if (newSub === "0px") {
      this.nextElementSibling.style.height = "100px";
    } else {
      this.nextElementSibling.style.height = "0px";
    }
  });
});

*/

$(function () {
  $(".sub").css("display", "none");
  $(".gnb>li>a").click(function () {
    var newSub = $(this).next(".sub").css("display");
    console.log(newSub);
    if (newSub === "none") {
      $(this)
        .next()
        .slideDown(4000, function () {
          alert("끝");
        });
    } else {
      $(this).next().slideUp(4000);
    }
  });
});
