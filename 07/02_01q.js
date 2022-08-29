var num = 100;
function calculate() {
  var input = $(".form-control");
  var value = Number(input.val());
  var totalValue = value + num;
  var h1 = $("h1").eq(1);
  var span = h1.find("span");
  span.text(totalValue);
}

var submitBtn = $("#submit"),
  container = $(".container");

submitBtn.click(function () {
  $("body").css("background", "pink");
});

container.on({
  mouseenter: mouseEnterContainer,
  mouseleave: mouseLeaveContainer,
  click: calculate,
});

function mouseEnterContainer() {
  container.text("옆테이블 남는거 싸가도 되요?");
  container.css("background", "pink");
}
function mouseLeaveContainer() {
  container.html(` 
  <p>
  후라이드 좋아한다고 말해야 했지 어떤 날엔 화내야 했지 (오빠가 돈이 어디
  있다고 양념을 사줘) 우린 데이트하면 후라이드 우리가 매일 먹고 또 먹던
  후라이드 근데 오빠 나도 속물 인가봐 양념이라면 눈이 돌아갔지 양념이
  오빠의 피 같아 지금은 후라이드 밖에 못 삼켜
</p>
<button id="submit" onclick="console.log('아줌마');">치킨시켜</button>
<div style="width:100px; height:100px; background:yellow;"></div>
`);

  container.css("background", "blue");
}
$("body").keyup(function (e) {
  console.log(e.keyCode);
});
