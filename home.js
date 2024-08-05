$(document).ready(function () {
  function closeSearch() {
    $(".opened")
      .animate(
        {
          width: "0px",
        },
        0
      )
      .removeClass("opened")
      .addClass("closed");
    $(".searchImg").attr("src", "img/search.svg");
    $(".dropDown").removeClass("none");
    $(".title").removeClass("none");
    $(".profile").removeClass("none");
    $("input").val("");
  }

  if ($(window).width() < 691) {
    function openSearch() {
      $(".closed")
        .animate(
          {
            width: "80vw",
          },
          450
        )
        .removeClass("closed")
        .addClass("opened");
      $(".searchImg").attr("src", "img/close.svg");
      $(".dropDown").addClass("none");
      $(".title").addClass("none");
      $(".profile").addClass("none");
      $("input").focus();
    }

    $(".dropDown").hover(
      function () {
        $(".dropDownContent").fadeIn(450);
      },
      function () {
        $(".dropDownContent").fadeOut(450);
      }
    );

    $(".searchImg").on("click", function () {
      if ($(this).attr("src") === "img/search.svg") {
        openSearch();
      } else {
        closeSearch();
      }
    });
  } else if ($(window).width() < 900 && $(window).width() > 690) {
    function openSearch() {
      $(".closed")
        .animate(
          {
            width: "15vw",
          },
          450
        )
        .removeClass("closed")
        .addClass("opened");
      $(".searchImg").attr("src", "img/close.svg");
      $("input").focus();
    }

    $(".searchImg").on("click", function () {
      if ($(this).attr("src") === "img/search.svg") {
        openSearch();
      } else {
        closeSearch();
      }
    });

    $('main ul').first().hover(
      function() {
        $('main ul li').last().fadeToggle(450);
      },
      function() {
        $('main ul li').last().fadeToggle(450);
      });

      const h1p = $('.h1Popular').text();
      const h1n = $('.h1New').text();

      $('main ul li').last().on('click', () => {
        if($('.h1New').last().text() === h1n) {
          $('main .new').fadeToggle(1);
          $('main .new').css({
            'display': 'flex'
          })
          $('.new-films, .new-shows').css({
            'flex-direction': 'row',
            'gap': '8%',
            'width': '100%'
          })
          $('main .popular').fadeToggle(1);
          $('.h1Popular').text(h1n);
          $('.h1New').text(h1p);
        } else {
          $('main .new').fadeToggle(1);
          $('main .popular').fadeToggle(1);
          $('.h1Popular').text(h1p);
          $('.h1New').text(h1n);
        }
      })
  } else {
    $(".closed").removeClass("closed").addClass("opened");

    $(".opened").focus(() => {
      $(".searchImg").attr("src", "img/close.svg");
    });
    $(".opened").blur(() => {
      $(".searchImg").attr("src", "img/search.svg");
    });

    $('main ul').first().hover(
      function() {
        $('main ul li').last().fadeToggle(450);
      },
      function() {
        $('main ul li').last().fadeToggle(450);
      });

      const h1p = $('.h1Popular').text();
      const h1n = $('.h1New').text();

      $('main ul li').last().on('click', () => {
        if($('.h1New').last().text() === h1n) {
          $('main .new').fadeToggle(1);
          $('main .new').css({
            'display': 'flex'
          })
          $('.new-films, .new-shows').css({
            'flex-direction': 'row',
            'gap': '8%',
            'width': '100%'
          })
          $('main .popular').fadeToggle(1);
          $('.h1Popular').text(h1n);
          $('.h1New').text(h1p);
        } else {
          $('main .new').fadeToggle(1);
          $('main .popular').fadeToggle(1);
          $('.h1Popular').text(h1p);
          $('.h1New').text(h1n);
        }
      })
  }
});
