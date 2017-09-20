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
$(document).ready(function () {
  $('#mycheckbox').change(function () {
    $('#mycheckboxdiv').toggle();
  });
});
/* effet hide show sur section*/
$(document).ready( function() {
  $(".effetHi").hide()
<<<<<<< HEAD
  var topOfOthDiv = $(".effetHide").offset().top;
  $(window).scroll(function() {
      if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
          $(".effetHi").show(); //reached the desired point -- show div
      }
  });
});
/*$(window).scroll(function() {
      $(".space:hidden").show();
});
/*$(function () {
  $(".effetHi").hide()
  $(".space").scroll(function () {
=======
  $("#espace").mouseenter(function () {
>>>>>>> dev
    $(".effetHi").show()
  })

});*/
$(function () {
  $(".effetHi1").hide()
<<<<<<< HEAD
  $(".service").scroll(function () {
=======
  $("#service").mouseenter(function () {
>>>>>>> dev
    $(".effetHi1").show()
  })

});
$(function () {
  $(".effetHi2").hide()
<<<<<<< HEAD
  $(".tarifs").scroll(function () {
=======
  $("#tarifs").mouseenter(function () {
>>>>>>> dev
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
<<<<<<< HEAD
$(function () {
  $('#datetimepicker1').datetimepicker();
});
=======

/** apparition des sections à l'écran **/
$(document).ready(function () {
  $('.apparition').viewportChecker({
    // Class to add to the elements when they are visible
    classToAdd: 'visible',
    // The offset of the elements (let them appear earlier or later)
    offset: 100,

    // Add the possibility to remove the class if the elements are not visible
    repeat: false,

    // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
    callbackFunction: function (elem, action) { }
  });
});

>>>>>>> dev
