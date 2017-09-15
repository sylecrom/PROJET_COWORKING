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
