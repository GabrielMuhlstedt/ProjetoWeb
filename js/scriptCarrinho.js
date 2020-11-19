var array_imagens = [['B. Morango','Bolo.jpg',' R$ 6',false],['B. Chocolate', 'Bolo de Chocolate.jpg','R$ 5,50',false],['Coxinha', 'Coxinha.jpg','R$ 3,00',false],['Empadinhas', 'Empadinhas.jpg','R$ 2,30',false],['Esfiha','Esfiha.jpg', ' R$ 4',false],['Enroladinho', 'Enroladinho.jpg','R$ 1,40',false],['Pão','Pao.jpg',' R$ 0.50',false],['Carolina', 'Carolina.jpg','R$ 1,99',false],['Rocambole', 'Rocambole.jpg','R$ 7,65',false],['Sonho', 'Sonho.jpg','R$ 4,75',false]];

var array_carrinho = [];

var itensCarrinho = window.localStorage;

$(document).ready(function(){
    fLocalListaImagens();
});

function fLocalListaImagens(){
    
    console.log(array_imagens);

    $(".div-imagens").html("");

    for(var i=0 ; i < array_imagens.length; i++){
        var conteudo = "";

        conteudo += '<div class="div-Card">';
        conteudo += '<div class="div-produtos">';
        conteudo += '<img src="../imagens/' + array_imagens[i][1] +'" width="200" height="166">';
        conteudo += '<div class="div-titulo">';
        conteudo += array_imagens[i][0] ;
        conteudo += '</div>';
        conteudo += '<div class = "div-rodape">';
        conteudo += '<div class="div-descricao">';
        conteudo += '<b>Preço:</b>' + array_imagens[i][2];
        conteudo += '</div>';
        conteudo += '<button class = "button-rodape" id_imagem = "'+ i +'"> Add Carrinho </button>';
        conteudo += '</div>';
        conteudo += '</div>';

        $(".div-imagens").append(conteudo)

    }  

    $(".button-rodape").click(function(){       
        var id = $(this).attr("id_imagem");

        array_carrinho.push(array_imagens[id]);

        itensCarrinho.setItem("produtos", JSON.stringify(array_carrinho));

        console.log(array_carrinho);

        fLocalListaImagens();
    });

    $(document).ready(function(){

        $("#bCarrinho").click(function(){
            window.location.href = "Lista.html";
        });
    });


}
