function initMap() {
  var laloupe = { lat: 48.473762, lng: 1.011784 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: laloupe
  });
  var icons = {
    point: {
      icon: 'poop.png',
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
    }
    else {
      $(".barreNavColor").css("background", "rgba(255, 254, 242,0)");
      $("#menuText a").css("color", "rgba(255,255,255,1)");
    }
  });
});
/* effet hide show sur section*/
$(function () {
  $(".effetHi").hide()
  $(".row").hover(function () {
    $(".effetHi").show()
  })

});
/*Bouton raccourcis*/
window.onload = function () {

  var element = document.getElementById('cn-button');

  element.onclick = function () {
    var d = document.getElementById("cn-wrapper").classList;
    if (d.contains("opened-nav")) {

      d.remove("opened-nav");

    } else {

      d.add("opened-nav");
    }
  }
}
