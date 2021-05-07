(function($){
    $('.list01 li').click(function(){
        $(this).css({'background': '#176cd7', 'color': '#fff'});
        $(this).siblings().css({'background': '#f5f5f5', 'color': '#666'})
    })
    tabChange = function(num){
        console.log($('.Characteristics ul:nth-of-type('+num+')').css('display'))
        $('.Characteristics ul:nth-of-type('+num+')').css('display', 'block');
        $('.Characteristics ul:nth-of-type('+num+')').siblings().css('display', 'none');
    }
})(jQuery);