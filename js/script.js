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

/* effet hide show sur section*/
$(function () {
  $(".effetHi").hide()
  $("#espaces").mouseenter(function () {
    $(".effetHi").show()
  })

});
$(function () {
  $(".effetHi1").hide()
  $("#services").mouseenter(function () {
    $(".effetHi1").show()
  })

});
$(function () {
  $(".effetHi2").hide()
  $("#tarifs").mouseenter(function () {
    $(".effetHi2").show()
  })


});

/** apparition des menus au clic cur nav desktop **/

$(function () {
  $(".tarifBan").click(function () {
    $(".effetHi2").show();
  })
});
$(function () {
  $(".espaBan").click(function () {
    $(".effetHi").show();
  })
});
$(function () {
  $(".serBan").click(function () {
    $(".effetHi1").show();
  })
});
/** apparition des menus au clic sur nav mobile **/
$(function () {
  $(".tarifBanM").click(function () {
    $(".effetHi2").show();
  })
});
$(function () {
  $(".espaBanM").click(function () {
    $(".effetHi").show();
  })
});
$(function () {
  $(".serBanM").click(function () {
    $(".effetHi1").show();
  })
});



/* APPARITION CLASS MAGIE IN-VIEW */
function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  return ((elemTop <= docViewBottom));
}

$(window).scroll(function () {
  $('.IconService').each(function () {
      if (isScrolledIntoView(this) === true) {
          $(this).addClass('animated')
          $(this).addClass('fadeInDown')
          
      }
  });

});