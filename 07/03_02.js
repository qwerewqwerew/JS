$(function(){
  $(".gnb>li>a").click(function(){
    var tg=$(this).next(".sub");
    if(!tg.hasClass("on")){
      $(".sub").removeClass("on");
      tg.addClass("on");
    }else{
      tg.removeClass("on");
    }

  })
})