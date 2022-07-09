$(".pregunta2").hide()
$(".pregunta3").hide()
$(".pregunta4").hide()
$(".pregunta5").hide()
$(".resultado1").hide()
$(".button6").hide()

let ladybug = 0
let catnoir = 0
let renarouge = 0
let hopecarapace = 0

$(".button1").click(function(){
    $(".pregunta1").hide();
    $(".pregunta2").show();
});

let respuesta1;

$(".button1").click(function(){
    respuesta1 = $(".input1").val();
    if (respuesta1 === "Decidida"){
        ladybug = ladybug + 1
    }else if (respuesta1 === "Engreido"){
        catnoir = catnoir + 1
    }else if (respuesta1 === "Astuta"){
        renarouge = renarouge + 1
    }else if (respuesta1 === "Divertido"){
        hopecarapace = hopecarapace + 1
    }else{
        
    }
});

$(".button2").click(function(){
    $(".pregunta2").hide();
    $(".pregunta3").show();
});



let respuesta2;

$(".button2").click(function(){
    respuesta2 = $(".input2").val();
    if (respuesta2 === "13"){
        ladybug = ladybug + 1
    }else if (respuesta2 === "14"){
        catnoir = catnoir + 1
    }else if (respuesta2 === "15"){
        renarouge = renarouge + 1
    }else if (respuesta2 === "16"){
        hopecarapace = hopecarapace + 1
    }else{

    }
});

$(".button3").click(function(){
    $(".pregunta3").hide();
    $(".pregunta4").show();
});

let respuesta3;

$(".button3").click(function(){
    respuesta3 = $(".input3").val();
});

$(".button4").click(function(){
    $(".pregunta4").hide();
    $(".pregunta5").show();
});

let respuesta4;

$(".button4").click(function(){
    respuesta4 = $(".input4").val();
});

$(".button5").click(function(){
    $(".pregunta5").hide();
    $(".resultado1").show();
});

let respuesta5;

$(".button5").click(function(){
    $(".button6").show()
    $(".resultado1").show()
    respuesta5 = $(".input5").val();
    console.log
    $(".resultado-parrafo").text("tu personalidad es "+ respuesta1 + ", la edad que crees que tienen los personajes es "+ respuesta2 + ", el accesorio que escogiste es " + respuesta3 + ",tu color favorito es " + respuesta4 + ",el animal que mas te gusta es " + respuesta5 );
});

$(".buttonReiniciar").click(function(){
    $(".pregunta1").show();
    $(".pregunta2").hide();
    $(".pregunta3").hide();
    $(".pregunta4").hide();
    $(".pregunta5").hide();

let contador=0;

    contador= contador+1;
    console.log("contador -> " + contador)
    $("#contador-parrafo").text("contador -> " + contador );
    $(".resultado1").hide();

});





