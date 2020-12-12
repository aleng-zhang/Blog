//当滚动条的位置处于距顶部600像素以下时，跳转链接出现，否则消失
$(window).scroll(function(){
    if ($(window).scrollTop()>600){
        $("#back2top").fadeIn();
    }else{
        $("#back2top").fadeOut();
    }
});

$(document).ready(function() {
    $("#back2top").click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });
});
