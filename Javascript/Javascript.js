$(document).ready(function () {



    var scrollBox = $(".full-page > .overlay-container"),
    niceScrollOptions = {
        // cursorwidth: "5px",
        cursorcolor: "#1894ff",
        cursorwidth: "7px",
        cursorborder: 0,
        cursorborderradius: "0",
        cursoropacitymin: "1"
    },
    demo2Check = $(".sakura-demo2").length,
    soft_progress_check = false,
    technical_progress_check = false,
    factsCheck = false,
    testimonials_slider = $('.testimonials-slider'),
    resumeSection = $('.resume'),
    scrollToTop = $(".scrollToTop"),
    navBar = $(".appsLand-navbar"),
    softSkills = $('.soft-skills'),
    technicalSkills = $(".technical-skills"),

    allProgress = [];

if (demo2Check) {
    scrollBox = $(".sakura-demo2");
}


    /* BUTTON  TO TOP FADE-IN-OUT*/


    // $(function(){
    //     $(window).scroll(function(){
    //         if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    //             $('#to-top').fadeIn(1000);

    //         }
    //         else {
    //             $('#to-top').fadeOut(500);
    //         }
    //     });
    // });

    /* END BUTTON  TO TOP  FADE-IN-OUT*/


    /* SMOOTH SCROLLING FOR SCROLL TO TOP */

    $('#to-top').bind('click', function()
    {
        $('body,html').animate({
                scrollTop: 0},
            1500);



    });

    /* END SMOOTH SCROLLING FOR SCROLL TO TOP */



    $('.kayo-links li').bind('click',function(e){
           $('.kayo-links li').removeClass('active');

           let elem = e.target.parentElement;
           elem.classList.add('active');
      
    })


  /**  Start Typed
     **====================== **/


    $(".kayo-work").typed({
        strings: ["Web Developer.", "Web Designer."],
        cursorChar: "",
        typeSpeed: 150,
        loop: true,
        backSpeed: 50
    });
    
  /**  End Typed
     **====================== **/

    
    /** Smooth Scrolling
     **====================== **/

    $(".kayo-links a,.scrollLink").on('click', function (e) {
        e.preventDefault();
        var hash = this.hash,
            scrollTopOffset = $(hash).offset().top;
        $('html, body').removeClass('mobile-menu-active').animate({
            scrollTop: scrollTopOffset
        }, 500, function () {
            window.location.hash = hash;
        });
    });

     /** => End Smooth Scrolling */

     function activeNavBar() {
        if ($(window).scrollTop() > 0) {
            navBar.addClass("active");
        } else {
            navBar.removeClass("active");
        }
    }
    activeNavBar();
    $(document).on("scroll",function () {
        activeNavBar();
    });


    
    /** Scroll To Top
     **====================== **/
    scrollToTop.on('click', function (e) {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    $(document).on("scroll", function () {
        // show scroll to top btn
        if ($(window).scrollTop() > 1000) {
            scrollToTop.addClass("active");
        } else {
            scrollToTop.removeClass("active");
        }
    });
    /** => Scroll To Top */
    



     /** Make NiceScroll
     **====================== **/
    
    scrollBox.niceScroll(niceScrollOptions);
    function fixNiceScroll() {
        scrollBox.getNiceScroll().resize();
    }
    scrollBox.on('resize', function () {
        // fix position for the niceScroll
        fixNiceScroll();
    });
    
    /** => End NiceScroll */




     /**  Start Progress Script And CountTo  Script
     **=========================================== **/

    function getOffsetTop($parent, $child) {
        return $child.position().top - $parent.position().top;
    }

    function readyProgress($pro) {
        var element = "#" + $pro.attr('id'),
            circle = new ProgressBar.Circle(element, {
                easing: 'easeInOut',
                color: $pro.data("color"),
                duration: 3000,
                strokeWidth: 5,
                trailWidth: 5,
                trailColor: '#3a4a5d',
                text: {
                    value: '0',
                    style: {
                        color: '#FFF',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        padding: 0,
                        margin: 0,
                        transform: {
                            prefix: true,
                            value: 'translate(-50%, -50%)'
                        }
                    }
                },
                svgStyle: {
                    display: 'inline-block',
                    width: 'auto'
                }
            });
        return circle;
    }
    
    $('.progressName').each(function () {
        allProgress.push({
            'circle': readyProgress($(this)),
            'proElement': $(this)
        });
    });
    function getStep(state, circle) {
        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }
    }
    function startProgress() {
        var i;
        for (i = 0; i < allProgress.length; i += 1) {
            allProgress[i].circle.animate(allProgress[i].proElement.data("value"), {
                duration: 1500,
                step: getStep
            });
        }
    }
    /**  End Progress Script And CountTo  Script
     **=========================================== **/

});




$(window).on('load', function () {
    $(".loading").animate({
        "top": "-100%"
    }, 1800, function () {
        $(this).remove();
    });
});


$(".menu-toggle").on("click", function () {
    $("body").toggleClass('mobile-menu-active');
});
$(".sakura-demo2-menu-toggle").on("click", function () {
    $(".sakura-navbar").toggleClass('sakura-demo2-mobile-menu-active');

    $(window).on('activate.bs.scrollspy', function (e) {
        history.replaceState({}, "", $("a[href^='#']", e.target).attr("href"));
    });



});