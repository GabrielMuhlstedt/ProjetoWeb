var itensCarrinho = window.localStorage;

$(document).ready(function(){
    fLocalListaCarrinho();
});

function fLocalListaCarrinho(){

    var itens = JSON.parse(itensCarrinho.getItem("produtos"));

    $(".listaCarrinho").html("");
   
    for(var i=0 ; i < itens.length; i++){       
        var conteudo = "";

        conteudo += '<div class="div-Card">';
        conteudo += '<table>';
        conteudo += '<tr><td><div class="div-produtos">';
        conteudo += '<img src="../imagens/' + itens[i][1] +'" width="100" height="66"></td>';
        conteudo += '<td><div class="div-titulo">';
        conteudo += itens[i][0] ;
        conteudo += '</div></td></tr>';
        conteudo += '<div class = "div-rodape">';
        conteudo += '<div class="div-descricao">';
        conteudo += itens[i][2];
        conteudo += '</div>';
        conteudo += '</table>';
        conteudo += '</div>';

        $(".listaCarrinho").append(conteudo)

    }

};
