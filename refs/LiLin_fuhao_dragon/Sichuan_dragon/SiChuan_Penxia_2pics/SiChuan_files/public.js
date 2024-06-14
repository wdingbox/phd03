$(function() {
  var browser = {
    versions: function() {
      var u = navigator.userAgent,
          app = navigator.appVersion;
      return { //移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') >-1 || u.indexOf('Adr') > -1, //android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
      };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  }
  /*20181115 修改*/
  var explorer =navigator.userAgent;
  if (explorer.indexOf("CDAndroid") >= 0){
    $('.head_box').css('display','none');
  }else if (explorer.indexOf("CDiOS") >= 0) {
    $('.head_box').css('display','none');
  }
  /*20181115 end 修改*/
  if ((browser.versions.mobile || browser.versions.ios || browser.versions.android ||
       browser.versions.iPhone) && !browser.versions.iPad) {
    $('#wrapper').show();
    if ($('html').hasClass('page_paper')) {
      $('html').addClass('isPc');
      pcFunc();
    } else {
      $('html').addClass('isWap');
      wapFunc();
    }
  } else {
    pcFunc();
    $('html').addClass('isPc');
    $('#wrapper').show();
  }
});// JavaScript Document

function Print(){
  var Title_e = $('#Title_e').html();
  var Content = $('.artTxt').html();
  var PartI='<div align="left" style="width:800px; background-color:#ffffff;padding-left:10px; padding-bottom:10px;"><img cms:src="http://www.chinadaily.com.cn/image_e/logo_cdcomcn_1.gif"><\/div>';
  var PartIII= '<div style="width:800px;background-color:#ffffff;padding-left:10px; padding-bottom:10px; font-family:Verdana, Arial, Helvetica, sans-serif;font-size:1.5em">'+Title_e+'<\/div>';
  var PartIV= '<div align="left" style="width:800px; background-color:#ffffff; padding-bottom:10px; padding-left:10px;">'+Content+'<div align="center" style="margin-top:20px;">Copyright By chinadaily.com.cn. All Rights Reserved.<\/div><\/div>';
  document.body.innerHTML =PartI+PartIII+PartIV;
  window.print();
}

//search
$(document).ready(function(){
  $('.son_ul').hide();
  $('.select_box').hover(
    function(){},
    function(){$(this).parent().find("ul.son_ul").slideUp(50)}
  )
  $('.select_box span').mouseover(
    function(){ $(this).parent().find('ul.son_ul').slideDown(300)}
  );
});

//search2
$(document).ready(function(){
  $('.son_ul2').hide();
  $('.select_box2').hover(
    function(){},
    function(){$(this).parent().find("ul.son_ul2").slideUp(50)}
  )
  $('.select_box2 span').mouseover(
    function(){ $(this).parent().find('ul.son_ul2').slideDown(300)}
  );
});

//search3
$(document).ready(function(){
  $('.son_ul3').hide();
  $('.select_box3').hover(
    function(){},
    function(){$(this).parent().find("ul.son_ul3").slideUp(50)}
  )
  $('.select_box3 span').mouseover(
    function(){ $(this).parent().find('ul.son_ul3').slideDown(300)}
  );
});

function pcFunc() {
  // map
  (function() {
    var $map = $('#map'),
        $tags = $map.find('.tab_tags a'),
        $cons = $map.find('.map_con .J_con');
    var curClass = 'cur';

    $tags.hover(function() {
      var index = $(this).index();

      $tags.removeClass(curClass);
      $(this).addClass(curClass);
      $cons.hide().eq(index).show();
    }, function() {
      var index = $(this).index();
    });
  })();
}

function wapFunc() {
  // p_list
  (function() {
    var $o = $('#p_list');
    var $inner = $o.find('.sliderInner'),
        $cur = $o.find('.sliderCur');
    var startX, startY, x = 0;
    var mLeft = 0;
    var sWidth = 0;
    var $moveBox = $inner.find('ul:first');
    var itemSize = $inner.find('li').size();
    var itemWidth = $inner.find('li:first').outerWidth(true);
    var index = 0;

    sWidth = itemSize * itemWidth;
    $moveBox.width(sWidth + itemSize);

    var maxLeft = sWidth - $inner.width();
    if ($o.length <= 0 || maxLeft <= 0) {
      return false;
    }

    $o[0].addEventListener('touchstart', function() {
      // event.preventDefault();
      var touch = event.touches[0];
      startX = touch.pageX;
      startY = touch.pageY;
    });

    $o[0].addEventListener('touchmove', function() {
      // event.preventDefault();
      var touch = event.touches[0];
      x = touch.pageX - startX;
      if (mLeft + x >= 0) {
        $moveBox.css('marginLeft', 0);
      } else {
        if (mLeft + x <= -maxLeft) {
          // $moveBox.css('marginLeft', -maxLeft);
        } else {
          $moveBox.css('marginLeft', mLeft + x);
        }
      }
    });

    $o[0].addEventListener('touchend', function() {
      mLeft = mLeft + x >= 0 ? 0 : mLeft + x;

      if (x < 0) {
        index = Math.ceil(Math.abs(mLeft) / itemWidth);
      }

      if (x > 0) {
        index = Math.floor(Math.abs(mLeft) / itemWidth);
      }

      displayCurrentItem();
    });

    $cur.find('a').on('click', function() {
      index = $(this).index();

      displayCurrentItem();
    });

    function displayCurrentItem() {
      index = index > (itemSize - 1) ? (itemSize - 1) : index;
      index = index < 0 ? 0 : index;

      $moveBox.animate({
        'marginLeft': -index * itemWidth
      }, 450, function() {
        mLeft = -index * itemWidth;
      });

      $cur.find('a').removeClass('cur');
      $cur.find('a').eq(index).addClass('cur');
    }
  })();

  //submenu
  var  $menuTrigger = $('.has-submenu .subBtn');
  $menuTrigger.click(function (e) {
    e.preventDefault();
    var $this = $(this);
    $(this).toggleClass('active').next('ul').toggleClass('active');
  });

  //closeNav
  (function() {
    var $btn = $('.menuLink');
    var $search = $('.nav');
    var $close = $search.find('.close2');

    $btn.on('click', function() {
      $search.show();
    });

    $close.on('click', function() {
      $search.hide();
    });
  })();
}