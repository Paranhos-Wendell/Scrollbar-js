$(function(){ 
    $(window).scroll(function(){
        var windowOffy = $(window).scrollTop();
        var windowHeight = $(window).height()
        $('.sessao').each(function(){
           
            var ellOffy = $(this).offset().top

            if(ellOffy+30 < (windowOffy + windowHeight) && ellOffy+30+$(this).height() > windowOffy){
                $('a').css('border-bottom', '0')
                var target = $(this).attr('target')
                $('.'+target).css('border-bottom' , '2px solid #444')
                return;
            }
        })


    })
 })