$(document).ready(function() {
    $(function() {
        //当滚动条的位置处于距顶部600像素以下时，跳转链接出现，否则消失
        $(window).scroll(function(){
            if ($(window).scrollTop()>600){
                $("#back-top").fadeIn(500);
            }else{
                $("#back-top").fadeOut(500);
            }
        });

        //当点击跳转链接后，回到页面顶部位置
        $("#back-top").click(function(){
            $('body,html').animate({scrollTop:0},500);
            return false;
        });
    });
});