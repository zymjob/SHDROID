(function($){
    $('.schemeTab li').click(function(){
        $(this).css({'background': '#176cd7', 'color': '#fff'});
        $(this).siblings().css({'background': '#f5f5f5', 'color': '#666'})
        $(this).children().css({'color': '#fff'});
        $(this).siblings().children().css({'color': '#666'})
    })
//    tabChange = function(){
//     $("html,body").animate({scrollTop: $("#schemeOverview")[0].offset().top}, 500);
//    }
})(jQuery);