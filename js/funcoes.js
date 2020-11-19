var mapa;

function initMap() {

  var configuracoes = {
    center: {lat: -25.523288, lng: -49.2002287},
    zoom: 15
  }

  mapa = new google.maps.Map(document.getElementById('map'), configuracoes);

  var marcador = new google.maps.Marker({
    position: {lat: -25.523288, lng: -49.2002287},
    title: "Padaria_Cavalli",
    map: mapa
  });

}
