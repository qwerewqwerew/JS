/* 
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".gnb>li>a").addEventListener("click", function () {
    var newSub = this.nextElementSibling.classList.contains('on');
    console.log(newSub);
    if (!newSub ) {
      this.nextElementSibling.classList.add('on','box1','box2');
    } else {
      this.nextElementSibling.classList.remove('on','box1');
    }
  });
});
 */


$(function () {
  $(".gnb>li>a").click(function () {
   $(this).next(".sub").toggleClass('on');
   $(this).next(".sub").addClass('box1 box2');
  });
});
