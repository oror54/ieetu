$(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 30) {
            $(".header").addClass('fixed')
        } else {
            $(".header").removeClass('fixed')
        };
    })
})
$(function(){
    $(".header").on('mouseenter', function(){
     $('.header').addClass('on');
    }).on('mouseleave', function(){
     $('.header').removeClass('on');
    });
    $(".header.on").on('mouseleave', function(){
     $('.header').removeClass('on');
    });

    //mobile
    $('body').on('click', '.mBtn', function () {
     if ($(this).hasClass('close')){
         $(".lnb").fadeOut(1000);
         $(this).removeClass('close');
         $('body').removeClass('active');
     } else {
         $(".lnb").fadeIn(1000);
         $(this).addClass('close');
         $('body').addClass('active');
     }
 });
 $('.mlnb > li').each(function(){
     let gnbArea = $(".mlnb > li");
     let gnbLink = $(this).children('a');
     if($(this).children('ul').length > 0){
         gnbLink.on('click',function(e){
             e.preventDefault();
             gnbArea.children('ul').stop().slideUp();
             $(this).addClass('active');
             $(this).siblings('a').addClass('active');
             $(this).parent().children('ul').stop().slideDown();
             return false;
         });
     }
 });
})

  //비디오재생속도 조절
  let v = document.getElementsByClassName("mainVideo");
  function My_VideoRate() {
      alert(v.playbackRate);
  }
  function Set_VideoRate() {
      v.playbackRate = 10;
  }
  