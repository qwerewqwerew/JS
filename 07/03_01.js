var gnbLiA = document.querySelectorAll(".gnb>li>a");
for (var i = 0; i < gnbLiA.length; i++) {
  var dep1 = gnbLiA[i];
  dep1.addEventListener("click", function () {
    var check = this.nextElementSibling.classList.contains("on");
    if (!check) {
      var allSub = document.querySelectorAll(".sub");
      //모든 .sub의 on을 삭제
      for (var j = 0; j < allSub.length; j++) {
        var dep2=allSub[j];
        dep2.classList.remove('on');
      }
      //선택한 a 옆의 .sub 에만 on 붙임
      this.nextElementSibling.classList.add("on");
    } else {
      this.nextElementSibling.classList.remove("on");
    }
  });
}
