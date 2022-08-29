var num = 100;
/*
1. 입력창에서 숫자 저장
  a. 입력창을 알려준다 -> input
  b. 숫자 저장 -> value
2. num 이랑 더함-> totalValue
3. 더한값을 h1에 출력
  a. span 을 하위요소로 가진 h1이 몇번째인지 확인
  b. span 을 저장
  c. innerText
*/
function calculate() {
  var input = document.querySelector(".form-control");
  var value = Number(input.value);
  var totalValue = value + num;
  var h1 = document.querySelectorAll("h1")[1];
  var span = h1.querySelector("span");
  span.innerText = totalValue;
}
var submitBtn = document.querySelector("#submit"),
  container = document.querySelector(".container");

submitBtn.addEventListener("click", function (event) {
  alert("원플러스원 곱빼기도 되요?");
});

container.addEventListener("mouseenter", mouseEnterContainer);
container.addEventListener("mouseleave", mouseLeaveContainer);

function mouseEnterContainer() {
  container.innerText = "옆테이블 남는거 싸가도 되요?";
  container.style.background = "pink";
}
function mouseLeaveContainer() {
  container.innerHTML= ` 
  <p>
  후라이드 좋아한다고 말해야 했지 어떤 날엔 화내야 했지 (오빠가 돈이 어디
  있다고 양념을 사줘) 우린 데이트하면 후라이드 우리가 매일 먹고 또 먹던
  후라이드 근데 오빠 나도 속물 인가봐 양념이라면 눈이 돌아갔지 양념이
  오빠의 피 같아 지금은 후라이드 밖에 못 삼켜
</p>
<button id="submit" onclick="console.log('아줌마');">치킨시켜</button>
<div style="width:100px; height:100px; background:yellow;"></div>
`;

  container.style.background = "blue";
}
document.addEventListener("keyup",function(e){
  console.log(e.keyCode);
})
