var menu1 = document.querySelectorAll(".menu1 li");

for (i = 0; i < menu1.length; i++) {
  menu1[i].style.color = "blue";
  menu1[i].addEventListener("mouseover", function () {
    this.style.color = "red";
  });
  menu1[i].addEventListener("mouseout", function () {
    this.style.color = "blue";
  });
}

//forEach
//menu.forEach(function(){})
var menu2 = document.querySelectorAll(".menu2 li");
menu2.forEach(function (a) {
  a.style.color = "blue";
});
//for in -> index

//for of
//var menu3 = document.querySelectorAll(".menu3 li");
var menu3 = {
  li1:document.querySelector(".menu3 li:nth-child(1)"),
  li2:document.querySelector(".menu3 li:nth-child(2)"),
  li3:document.querySelector(".menu3 li:nth-child(3)"),
  li4:document.querySelector(".menu3 li:nth-child(4)"),
 };

for (let k in menu3) {
  console.log(k);
  menu3[k].style.color = "blue";
}

//do/while

var menu4 = document.querySelectorAll(".menu4 li");
let y = 0;
do {
  menu4[y].style.color = "purple";
  y++;
} while (y < menu4.length);
