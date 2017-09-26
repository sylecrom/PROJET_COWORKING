function initMap() {
  var laloupe = { lat: 48.473762, lng: 1.011784 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: laloupe
  });
  var icons = {
    point: {
      icon: 'css/img/logomap.png',
    }
  };
  var features = [
    {
      position: new google.maps.LatLng(48.473762, 1.011784),
      type: 'point'
    }];
  features.forEach(function (feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
  });
}
/* défilement sur la page SCROLL SMOOTH */

$(document).ready(function () {
  $('.js-scrollTo').on('click', function () {
    var page = $(this).attr('href');
    var speed = 750;
    $('html, body').animate({ scrollTop: $(page).offset().top - 50 }, speed);
    $('.menuBurger input').prop('checked', false);
    return false;
  });
});

/* modification de la barre de Navigation */
$(document).ready(function () {
  $(window).on("scroll", function () {
    var wn = $(window).scrollTop();
    if (wn > 120) {
      $(".barreNavColor").css("background", "rgba(255, 254, 242,1)");
      $("#menuText a").css("color", "rgba(0,0,0,1)");
      $(".logo").css("-webkit-filter", "invert(1)");
      $(".logo").css("filter", "invert(1)");
    }
    else {
      $(".barreNavColor").css("background", "rgba(255, 254, 242,0)");
      $("#menuText a").css("color", "rgba(255,255,255,1)");
      $(".logo").css("-webkit-filter", "none");
      $(".logo").css("filter", "none");
    }
  });
});


/* APPEAR IN-VIEW */

//if ($(window).width() > 768) {


  $(window).on('scroll', function () {
  var $elem = $('.emagicFID');
  var $window = $(window);
  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemTop <= docViewBottom) {
    $('.emagicFID').addClass('animated fadeInDown');
    $('.emagicFIU').addClass('animated fadeInUp');
  }
});
/*
$(window).on('scroll', function () {
  var $elem = $('.emagicFIU');
  var $window = $(window);
  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemTop <= docViewBottom) {
          $('.emagicFIU').addClass('animated fadeInUp');

  }
});
*/
$(window).on('scroll', function () {
  var $elem = $('.smagicFID');
  var $window = $(window);
  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemTop <= docViewBottom) {
    $('.smagicFID').addClass('animated fadeInDown');
    $('.smagicFIU').addClass('animated fadeInUp');
  }
});
/*
$(window).on('scroll', function () {
  var $elem = $('.smagicFIU');
  var $window = $(window);
  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemTop <= docViewBottom) {
    $('.smagicFIU').addClass('animated fadeInUp');
  }
});
*/

$(window).on('scroll', function () {
  var $elem = $('.tmagicFID');
  var $window = $(window);
  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemTop <= docViewBottom) {
    $('.tmagicFID').addClass('animated fadeInDown');
    $('.tmagicFIU').addClass('animated fadeInUp');
  }
});
/*
$(window).on('scroll', function () {
  var $elem = $('.tmagicFIU');
  var $window = $(window);
  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemTop <= docViewBottom) {
    $('.tmagicFIU').addClass('animated fadeInUp');
  }
});
*/


$(window).on('scroll', function () {
  var $elem = $('.fmagicSIL');
  var $window = $(window);
  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemTop <= docViewBottom) {
    $('.fmagicSIL').addClass('animated slideInLeft');
    $('.fmagicSIR').addClass('animated slideInRight');
  }
});
/*
$(window).on('scroll', function () {
  var $elem = $('.fmagicSIR');
  var $window = $(window);
  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemTop <= docViewBottom) {
    $('.fmagicSIR').addClass('animated slideInRight');
  }
});
*/


//}


// NO REFRESH AFTER FORM SUBMIT

$(document).ready(function () {
  $('#prospects_form').on('submit', function (e) {

    $.ajax({
      type: 'post',
      url: 'https://script.google.com/macros/s/AKfycbxx3xafcGhCOc0iC4vXdfwlGNFNsap0fknnMo9AoaXXkjy6f9M/exec',
      success: function () {
        alert("Email has been sent!");
      }
    });
    e.preventDefault();
  });
});


