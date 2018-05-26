 $(function() {


     $(window).scroll(function (event) {
        var vitri=$(window).scrollTop();
        var mk = $('#ismkt').offset().top;
        console.log(vitri);
        if(vitri >= mk-250){
            console.log("jk");
           TweenMax.staggerTo(".div-mk", 1, { y:0, opacity:1}, 0.3);
        }

        var gt = $('#gioithieu').offset().top;
        console.log(vitri);
        if(vitri >= gt-250){
            console.log("jk");
           TweenMax.staggerTo("#gt1", 1, { x:0, opacity:1}, 0.1);
           TweenMax.staggerTo("#gt2", 1, { x:0, opacity:1}, 0.1);
        }

        var nt = $('#isnt').offset().top;
        console.log(vitri);
        if(vitri >= nt-250){
            console.log("jk");
           TweenMax.staggerTo(".intent", 1, { scale:1, opacity:1}, 0.04);
        }

         if(vitri >= 50){
            $('.navbar-default').addClass('menufix');
         }else{
             $('.navbar-default').removeClass('menufix');
         }


    });

    $('.listmenu1 li:nth-child(1), .isup').click(function () {
        $('body,html').animate({scrollTop:0},1000,"easeInOutExpo");
        return false;
    });
    $('.listmenu1 li:nth-child(2), .lec_scroll_down').click(function () {
        $('body,html').animate({scrollTop:$('#gioithieu').offset().top},1000,"easeInOutQuad");
        return false;
    });
    $('.listmenu1 li:nth-child(3)').click(function () {
        $('body,html').animate({scrollTop:$('#ismkt').offset().top},1200,"easeInOutQuad");
        return false;
    });
    $('.listmenu1 li:nth-child(5)').click(function () {
        $('body,html').animate({scrollTop:$('#isnt').offset().top},1500,"easeInOutQuad");
        return false;
    });
    $('.listmenu1 li:nth-child(6)').click(function () {
        $('body,html').animate({scrollTop:$('#idlienhe').offset().top},1500,"easeInOutQuad");
        return false;
    });
 });