(function (g) {
    new WOW().init();
    var f = g("#main-nav");
    var c = g(".toggle");
    var b = {
        disableAt: false,
        customToggle: c,
        levelSpacing: 10,
        navTitle: "Zuha Menu",
        levelTitles: true,
        levelTitles: true,
        labelClose: false,
        levelTitleAsBack: true,
        levelOpen: "expand",
        closeOnClick: true,
        insertClose: true,
        closeActiveLevel: true,
        insertBack: true,
    };
    var e = f.hcOffcanvasNav(b);
    function h() {
        if (g(window).scrollTop() >= 80) {
            g(".navfix").addClass("sticky");
        } else {
            g(".navfix").removeClass("sticky");
        }
    }
    g(function () {
        g(window).scroll(h);
        h();
    });
    var a = g("li.sbmenu");
    a.hover(
        function () {
            g(this).addClass("hover");
        },
        function () {
            g(this).removeClass("hover");
        }
    );
    var d = g(".service-card-prb");
    d.owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        responsive: { 0: { items: 1 }, 520: { items: 2 }, 768: { items: 3 }, 1200: { items: 3 }, 1400: { items: 3 }, 1600: { items: 3 } },
    });
    var d = g(".testimonial-card-a");
    d.owlCarousel({ items: 1, loop: true, autoplay: true, autoplayTimeout: 6000, autoplayHoverPause: true, smartSpeed: 500, responsive: { 0: { items: 1 }, 768: { items: 1 }, 1024: { items: 1 }, 1400: { items: 1 } } });
    var d = g(".video-testimonials");
    d.owlCarousel({ items: 2, nav: false, dots: false, autoplay: false, autoplayTimeout: 3500, smartSpeed: 1500, margin: 20, responsive: { 0: { items: 1 }, 768: { items: 2 }, 1024: { items: 2 }, 1400: { items: 2 } } });
    var d = g(".project-screens");
    d.owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        responsive: { 0: { items: 1 }, 520: { items: 2 }, 768: { items: 3 }, 1200: { items: 3 }, 1400: { items: 3 }, 1600: { items: 3 } },
    });
    
    var d = g(".testimonial-card-b");
    d.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: true,
        dotsContainer: "#testimonials-avatar",
        smartSpeed: 500,
        responsive: { 0: { items: 1 }, 768: { items: 1 }, 1024: { items: 1 }, 1400: { items: 1 } },
    });
    
})(jQuery);
