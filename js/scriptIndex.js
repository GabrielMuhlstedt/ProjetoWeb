var mapa;

$(document).ready(function(){

    $("#bBotao").click(function(){
        window.location.href = "pagina/Carrinho.html";
    });

    $("#bBotaoCadastro").click(function(){
        window.location.href = "pagina/Cadastro.html";
    });

    $("#iconeLinkT").click(function(){
      window.location = "https://twitter.com/login?lang=pt";
    })

    $("#iconeLinkF").click(function(){
      window.location = "https://www.facebook.com/";
    })

    $("#iconeLinkI").click(function(){
      window.location = "https://www.instagram.com/";
    })

    $("#iconeLinkP").click(function(){
      window.location = "https://br.pinterest.com/";
    })
});


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


