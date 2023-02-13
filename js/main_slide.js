$(function(){

  $(".content_section_2_slider_wrap").hide();
  $(".content_section_2_slider_wrap:first").show();

  $(".slide_cate_wrap ul li").click(function () {
      $(".slide_cate_wrap ul li").removeClass("current");
      $(this).addClass("current");
      $(".content_section_2_slider_wrap").hide();
      var activeTab = $(this).attr("tab");
      $("#" + activeTab).fadeIn();
  });

  var swiper1 = new Swiper(".content_section_1_slider_wrap .slide_wrap", {
    slidesPerColumn: 2,
    slidesPerView: 4,
    slidesPerColumnFill: 'column',
    spaceBetween: 30,
    speed: 1500,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: "#slide_1 .control_btn_next",
      prevEl: "#slide_1 .control_btn_pre",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
  });

  var swiper2 = new Swiper(".content_section_2_slider_wrap", {
    initialSlide: 3,
    slidesPerView: 6,
    spaceBetween: 28,
    speed: 1500,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: "#slide_2 .control_btn_next",
      prevEl: "#slide_2 .control_btn_pre",
    },
    breakpoints: {
      1600: {
        slidesPerView: 4,
      },
      1024: {
        centeredSlides: false,
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      520: {
        slidesPerView: 1,
      },
    },
  });

  var swiper3 = new Swiper(".board_wrap", {
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 5000,
    },

    navigation: {
      nextEl: "#slide_3 .control_btn_next",
      prevEl: "#slide_3 .control_btn_pre",
    },
  });

  var swiper4 = new Swiper(".content_section_4_slider_wrap .list_wrap", {
    loop: true,
		speed: 1500,
		autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".bullet_wrap",
      clickable: true,
    },
    navigation: {
      nextEl: "#slide_4 .control_btn_next",
      prevEl: "#slide_4 .control_btn_pre",
    },
  });


  var swiper5 = new Swiper("#banner_slide_wrap", {
    loop: true,
		speed: 1500,
		autoplay: {
      delay: 5000,
    },

    navigation: {
      nextEl: "#slide_5 .control_btn_next",
      prevEl: "#slide_5 .control_btn_pre",
    }

  });
  $(".control_btn_stop").click(function(){
    swiper5.autoplay.stop();
  });

  // $(".control_btn_play").click(function(){
  //   swiper5.autoplay.start();
  // });


});
