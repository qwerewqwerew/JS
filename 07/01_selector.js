////id 선택
//document.getElementById("one").style.//background="pink";
////태그선택
//var el2=document.getElementsByTagName("li");
//console.log(el2);
//el2[1].style.background="yellow";
////클래스선택
//var el3=document.getElementsByClassName//("highlight");
//el3[2].style.width="500px";
//el3[2].style.background="black";
//el3[2].style.color="white";
////cssText : 기존의 css속성을 덮어씌움
//el3[1].style.cssText="width:200px; margin:auto; //background:blue;";
//
//let el4=document.querySelector(".highlight");
//console.log('el4',el4);
//el4.style.color="red";
//let el5=document.querySelectorAll(".highlight");
//console.log('el5',el5);
//el5[1].style.color="red";

/* 제이쿼리 */
$("#one").css('background-color','yellow');
//여러개중 하나
let el2=$('li').eq(2);
console.log(el2);
el2.css('background-image','url(https://cdn-icons-png.flaticon.com/512/8332/8332390.png)');
el2.css('background-size','20px');
el2.css('background-repeat','no-repeat');
var el3=$('.highlight');
console.log(el3);
el3.eq(1).css({width:'500px', margin: 'auto', background: 'pink'})