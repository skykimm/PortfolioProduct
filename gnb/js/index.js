$(function(){
/******************************************
      var 변수
*******************************************/
   var 
      $wrap = $('.bg-fix'),
      $topHeader = $('.top-header-menu')
      $gnb = $('.header-menu'),
      $gnbLi = $gnb.find(' > li'),
      $gnb2Dep = $gnbLi.find('.sub-inner-menu'),
      $gnb2 = $('.header-brand-1'),
      $gnbLi2 = $gnb2.find(' > li'),
      $gnb2Dep2 = $gnbLi2.find('.header-brand-2'),
      $gnb2Li3 = $gnb2Dep2.find('> li'),
      $topPopup = $('.top-popup'),
      $headerfix = $('.top-header'), 

   
/******************************************
      GNB dep1
*******************************************/

   $gnbLi.on({
      "mouseenter focusin" : function(){
         $gnb2Dep.addClass('on');
         $(this).addClass('on').find($gnb2Dep).stop().fadeIn(200);
         gnbOver($(this));// bg-popup 유무
         logoImg($(this));
      },
      "mouseleave focusout" : function(){
         $gnb2Dep.removeClass('on');
         $(this).removeClass('on').find($gnb2Dep).stop().fadeOut(200);
         $topPopup.removeClass('on'); // bg-popup 유무
         $('.top-header').removeClass('change');
      }
   });

/******************************************
      GNB dep2
*******************************************/

   $gnbLi2.on({
      "mouseenter focusin" : function(){
         $gnb2Dep2.addClass('on');
         $(this).addClass('on').find($gnb2Dep2).stop().slideDown(200);
      },
      "mouseleave focusout" : function(){
         $gnb2Dep2.removeClass('on');
         $(this).removeClass('on').find($gnb2Dep2).stop().slideUp(200);
      }
   });
   

/******************************************
      bg-popup 
*******************************************/

   function gnbOver($this) {
      var subInnerMenu = $this.find('.sub-inner-menu').length;
      if(subInnerMenu > 0) {
         $topPopup.addClass('on');
         $headerfix.removeClass('on');

      } else{
         $topPopup.removeClass('on');
         $headerfix.addClass('on');
      }
   };


/******************************************
      logo img 
*******************************************/

   function logoImg (){
      $('.top-header').on({
         "mouseover" : function(){
            logoOn(true);
         },
         
         "mouseleave" : function(){
            logoOn(false);
         }
      });          
   };
         

/******************************************
      scroll 시 top 영역
*******************************************/

   function topscroll(){
      if(document.documentElement.scrollTop > 20){
         $headerfix.addClass("on");
         logoOn(true);
      }
      else{
         $headerfix.removeClass("on");
         logoOn(false);
      }
   };

   window.onscroll = function(){
      topscroll()};
});

   // 스크롤 시 이미지 변경
   function logoOn(is_on){
      if(is_on){
         $('.top-header-logo').find('img').eq(0).addClass('over');
         $('.top-header-logo').find('img').eq(0).prop('src','img/top_logo_on.png');

         $('.top-header-search').find('img').eq(0).addClass('over');
         $('.top-header-search').find('img').eq(0).prop('src','img/top_mypage_on.png');

         $('.top-header-search').find('img').eq(1).addClass('over');
         $('.top-header-search').find('img').eq(1).prop('src','img/top_cart_on.png');

         $('.top-header-search').find('img').eq(2).addClass('over');
         $('.top-header-search').find('img').eq(2).prop('src','img/top_search_on.png');
      }
      else{
         if(document.documentElement.scrollTop > 20)
         return;
         $('.top-header-logo').find('img').eq(0).removeClass('over');
         $('.top-header-logo').find('img').eq(0).prop('src','img/top_logo.png');

         $('.top-header-search').find('img').eq(0).addClass('over');
         $('.top-header-search').find('img').eq(0).prop('src','img/top_mypage.png');

         $('.top-header-search').find('img').eq(1).addClass('over');
         $('.top-header-search').find('img').eq(1).prop('src','img/top_cart.png');

         $('.top-header-search').find('img').eq(2).addClass('over');
         $('.top-header-search').find('img').eq(2).prop('src','img/top_search.png');
      }
      
   }
