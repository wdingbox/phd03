$(function(){

    // 页面加载动画效果
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        });
        wow.init();
    };

    // 导航展开收回
    $('.navbtn').click(function(){
        if($('body').hasClass('open')){
            $('body').removeClass('open');
            $('.searchbox').removeClass('open');
        }else{
            $('body').addClass('open');
        }
    });
    $('#bgmask').click(function(){
        $('body').removeClass('open');
        $('.searchbox').removeClass('open');
    });

    // 选择语言
    $('.language .item').click(function(){
        $(this).next().slideDown();
    });
    $('#header').mouseleave(function(){
        $('.lang-list').slideUp();
    })

    // 搜索
    $('.search .item').click(function(){
        $('.searchbox').toggleClass('open');
        $('.mask2').toggleClass('on');
    });
    $('.mask2').click(function(){
        $('.searchbox').removeClass('open');
        $(this).removeClass('on');
    });

    $('#nav .nli').mouseenter(function(){
        if($(this).index()==0){
            $('.mask2').removeClass('on');
        }else{
            $('.mask2').addClass('on');
        }
       
    }).mouseleave(function(){
        $('.mask2').removeClass('on');
    })


    $(window).resize(function(){
        change();
    });
    change();

});
function change(){
    var width = $(window).width();
    if (width<1280) {
        $('#nav .nli .item').click(function(){
            // e.preventDefault();
            if($(this).hasClass('on')){
                $(this).removeClass('on');
                $(this).next().slideUp();
            }else{
                $(this).addClass('on');
                $(this).next().slideDown();
                $(this).parent().siblings().find('.subnav').slideUp();
                $(this).parent().siblings().find('.item').removeClass('on');
            }
        })
    }else{
        return false;
    }
}
