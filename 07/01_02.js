/*

document.addEventListener('DOMContentLoaded',function(){
  document.querySelector('h1').style.color="red";
  document.querySelector('h1').nextElementSibling.style.color="red";
  document.querySelector('h1').nextElementSibling.nextElementSibling.style.color="orange";
})

*/

$(function(){
  $('h1').css('color','red');
  $('h1').next().css('color','red');
  $('h1').next().next().css('color','orange');
})