(function($){
    //导航栏
    $('.nav>li').hover(
        function(){
            $(this).children('.numTow').css('display', 'block')
        },
        function(){
            $(this).children('.numTow').css('display', 'none')
        },
    );

    //产品下拉
    $('.eauipList>li').click(function(){
        $(this).css('color', '#176cd7');
        $(this).children('span').text('-');
        $(this).children('span').css('color', '#176cd7');
        $(this).siblings().css('color', '#333');
        $(this).siblings().children('span').css('color', '#000');
    })


    //产品详情切换
    $('.AIR-T01').click(function(){
        $('.equipRight').html($('.contRight').html())
    })

    //产品首页默认进来显示大气环境监测仪器，其余隐藏
    $('.shj').css('display', 'none');
    $('.gdtcy').css('display', 'none');
    $('.smkxyq').css('display', 'none');

    module1 = function(){
        $('.dqhj').css('display', 'flex');
        $('.shj').css('display', 'none');
        $('.gdtcy').css('display', 'none');
        $('.smkxyq').css('display', 'none');
    }
    module2 = function(){
        $('.dqhj').css('display', 'none');
        $('.shj').css('display', 'flex');
        $('.gdtcy').css('display', 'none');
        $('.smkxyq').css('display', 'none');
    }
    module3 = function(){
        $('.dqhj').css('display', 'none');
        $('.shj').css('display', 'none');
        $('.gdtcy').css('display', 'flex');
        $('.smkxyq').css('display', 'none');
    }
    module4 = function(){
        $('.dqhj').css('display', 'none');
        $('.shj').css('display', 'none');
        $('.gdtcy').css('display', 'none');
        $('.smkxyq').css('display', 'flex');
    }
   
})(jQuery);

