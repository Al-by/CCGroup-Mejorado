$(document).ready(resize);
$(window).resize(resize);
$(document).ready(slider1);

//DARK MODE
$(document).ready(function(){
    let $darkMode = $("#darkModeButton");
    let $darkModeIcon = $("#darkModeButton i");

    $darkMode.on("click", function(){
        $("body").toggleClass("darkMode");
        if($("body").hasClass("darkMode")){
            $darkModeIcon.removeClass("bxs-bulb").addClass("bx-bulb");
        } else {
            $darkModeIcon.removeClass("bx-bulb").addClass("bxs-bulb");
        }
    });
});
//===========================NAVBAR======================
//Toggle dropdown
$(document).ready(function(){
    $(".menu-item a").click(function(){
        $(this).next(".menu-dropdown").slideToggle();
    })
});

//navbar Navigation buttons
$(document).ready(function() {
    var menu = $(".inferiorHeader nav");
    var menuBtn = $(".menuBtn");
    var closeBtn = $(".closeBtn");

    menuBtn.click(function() {
        menu.addClass("active");
    });

    closeBtn.click(function() {
        menu.removeClass("active");
    });
});

//sticky navbar
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

//=========================BANNER========================
//resize banner img
function resize(){
    var actual_width = window.innerWidth;
    if (actual_width > 800){
        for (let i = 0; i < $('.images-container li').length; i++) {
            $(".imgBannerCarrousel" + i).attr("src","img/Banners Principales/Desktop/banner" + (i+1) +".jpg");
            console.log(i)
        }
    }
    if (actual_width < 800){
        for (let i = 0; i < $('.images-container li').length; i++) {
            $(".imgBannerCarrousel" + i).attr("src","img/Banners Principales/Mobile/banner" +  (i+1) +".jpg");
        }
    }
}

//slider1
function slider1() {
    var imgNumber, 
        sliderContainerWidth, 
        imgContainer,
        index,
        flag = true,
        speed = 600,
        bullets = true,
        auto = true ,
        time = 4000 ;
        
    construction();
    $(window).resize(construction);
    if(auto){
        var handle = setInterval(slideRight, time) ; 
    }

    function construction() {
        index = 1;
        imgNumber = $('.images-container li').length;
        sliderContainerWidth = Math.round($('#slider-container').width());
        imgContainer = sliderContainerWidth * imgNumber;

        $('.images-container').css("width", imgContainer);
        $('.images-container li').css("width", sliderContainerWidth);
        $('.images-container').css("margin-left", 0);
        if (bullets == true) {
            $('.bullets-container').html("");
            for (i = 1; i <= imgNumber; i++) {
                $('.bullets-container').append("<span class='bullet'></span>");
            }
            $('.bullet').eq(0).addClass('active');
        }
        $(".bullet").click(pagers);
        $('.a-right').click(slideRight);
        $('.a-left').click(slideLeft);
    }

    function pagers() {
        if (!$(this).hasClass('active')) {
            var bulletIndex = $(".bullets-container span").index(this) + 1;
            index = bulletIndex;
            $(".bullets-container").find(".bullet").removeClass("active").eq(bulletIndex - 1).addClass("active");
            $('.images-container').animate({
                marginLeft: -sliderContainerWidth * (bulletIndex - 1)
            }, speed);
        }
    }

    function slideRight() {
        var imgContainerLeft = parseInt($('.images-container').css('margin-left'));
        if (flag) {
            if (imgContainerLeft == -sliderContainerWidth * (imgNumber - 1)) {
                index = 1;
                $('.images-container').animate({
                    marginLeft: 0
                }, speed, function() {
                    flag = true;
                })
            } else {
                index++;
                $('.images-container').animate({
                    marginLeft: '-=' + sliderContainerWidth
                }, speed, function() {
                    flag = true;
                })
            }
            flag = false;
            $(".bullets-container").find(".bullet").removeClass("active").eq(index - 1).addClass("active");
        }
    }

    function slideLeft() {
        var imgContainerLeft = parseInt($('.images-container').css('margin-left'));
        clearInterval(slideRight, 3000);
        if (flag) {
            if (imgContainerLeft == 0 ) {
                index = index + (imgNumber - 1);
                $('.images-container').animate({
                    marginLeft: -sliderContainerWidth * (imgNumber - 1) + 'px'
                }, speed, function() {
                    flag = true;
                })
            } else {
                index--;
                $('.images-container').animate({
                    marginLeft: '+=' + sliderContainerWidth
                }, speed, function() {
                    flag = true;
                })
            }
            flag = false;
            $(".bullets-container").find(".bullet").removeClass("active").eq(index - 1).addClass("active");
        }

    }
    $("#slider-container .arrow , .bullets-container").hover(function(){
      clearInterval(handle);
    },function(){
      handle = setInterval(slideRight, time) ;
    })
};