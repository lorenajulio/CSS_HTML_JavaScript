'use strict'
//Funcion registrar
$("#registrar").click(function () {
    var name = document.getElementById("name");
    var last_name = document.getElementById("last_name");

    if (name.value == "") {
        document.getElementById("name").style.borderColor = "red";
        name.focus();
        return false;
    } else if (last_name.value == "") {
        document.getElementById("last_name").style.borderColor = "red";
        last_name.focus();
        return false;
    } else {
        var user = name.value + " " + last_name.value;
        document.getElementById("user").innerHTML = user;
        document.getElementById("user2").innerHTML = user;
        $("#login").css({ "display": "none" });
        $("#welcome").css({ "display": "block" });
    }
});


//Funcion que inicia el test
$("#test").click(function () {
    $("#pregunta0").css({ "display": "block" });
    $("#controles").css({ "display": "block" });
    $("#welcome").css({ "display": "none" });
    $("#items").css({ "display": "flex" });
    $("#contPreguntas").css({ "display": "block" });
    document.getElementById("actual").innerHTML = "pregunta 1 de 9";
    pag(0);
    //Llamado de la funcion desabilitar control
    desabilitarControl()
});

//funcion control de seleccion de preguntas
let txt_ind_p_oculto
function pag(n) {

    document.getElementById("actual").innerHTML = "pregunta " + (n + 1) + " de 9";
    var indc = '<input type="text" value="' + n + '"  id="indc">';
    document.getElementById("indicador_cont").innerHTML = indc;
    $("#pregunta0").css({ "display": "none" });
    $("#pregunta1").css({ "display": "none" });
    $("#pregunta2").css({ "display": "none" });
    $("#pregunta3").css({ "display": "none" });
    $("#pregunta4").css({ "display": "none" });
    $("#pregunta5").css({ "display": "none" });
    $("#pregunta6").css({ "display": "none" });
    $("#pregunta7").css({ "display": "none" });
    $("#pregunta8").css({ "display": "none" });
    $("#pregunta" + n).css({ "display": "block" });

    //Llamado de la funcion desabilitar control
    desabilitarControl();
    color();
}


//Respuestas correctas
var respuestasCorrectas =
    ["Leonel messi", "Italia", "Jurgen Klopp", "Real madrid", "Neymar Jr", "10", "Pelé", "Uruguay", "Miroslav Klose"];

let indc_respt_correcta;





//Comprobar Pregunta
var suma = 0;

var valor = 0.5555555555555556;

function comprobar() {
    if (($("input[name='rst']").is(':checked')) && ($("input[name='rst1']").is(':checked')) && ($("input[name='rst2']").is(':checked'))
        && ($("input[name='rst3']").is(':checked')) && ($("input[name='rst4']").is(':checked')) && ($("input[name='rst5']").is(':checked'))
        && ($("input[name='rst6']").is(':checked')) && ($("input[name='rst7']").is(':checked')) && ($("input[name='rst8']").is(':checked'))) {
        var rest = $("input[name='rst']:checked").val();
        if (rest == respuestasCorrectas[0]) {
            suma += valor;
            if ($("input[name='rst']").is(':checked'))
                $("#rst").css({
                    "background": "#27F32C",
                    "border-radius": "5px 5px",
                    "padding": "2px"
                });
        } else {
            $("#rst").css({
                "background": "#27F32C",
                "border-radius": "5px 5px",
                "padding": "2px"
            });
        }

        var rest1 = $("input[name='rst1']:checked").val();
        if (rest1 == respuestasCorrectas[1]) {
            suma += valor;
            $("#rst1").css({
                "background": "#27F32C",
                "border-radius": "5px 5px",
                "padding": "2px"
            });
        } else {
            $("#rst1").css({
                "background": "#27F32C",
                "border-radius": "5px 5px",
                "padding": "2px"
            });
        }

        var rest2 = $("input[name='rst2']:checked").val();
        if (rest2 == respuestasCorrectas[2]) {
            suma += valor;
            $("#rst2").css({
                "background": "#27F32C",
                "border-radius": "5px 5px",
                "padding": "2px"
            });
        } else {
            $("#rst2").css({
                "background": "#27F32C",
                "border-radius": "5px 5px",
                "padding": "2px"
            });
        }

        var rest3 = $("input[name='rst3']:checked").val();
        if (rest3 == respuestasCorrectas[3]) {
            suma += valor;
            $("#rst3").css({
                "background": "#27F32C",
                "border-radius": "5px 5px",
                "padding": "2px"
            });
        } else {
            $("#rst3").css({
                "background": "#27F32C",
                "border-radius": "5px 5px",
                "padding": "2px"
            });
        }

        var rest4 = $("input[name='rst4']:checked").val();
        if (rest4 == respuestasCorrectas[4]) {
            suma += valor;
            $("#rst4").css({
                "background": "#27F32C",
                "border-radius": "5px 5px",
                "padding": "2px"
            });
        } else {
            $("#rst4").css({
                "background": "#27F32C",
                "border-radius": "5px 5px",
                "padding": "2px"
            });
        }

        var rest5 = $("input[name='rst5']:checked").val();
        if (rest5 == respuestasCorrectas[5]) {
            suma += valor;
            $("#rst5").css({
                "background": "#27F32C",
                "border-radius": "5px 5px",
                "padding": "2px"
            });
        } else {
            $("#rst5").css({
                "background": "#27F32C",
                "border-radius": "5px 5px",
                "padding": "2px"
            });
        }

        var rest6 = $("input[name='rst6']:checked").val();
        if (rest6 == respuestasCorrectas[6]) {
            suma += valor;
            $("#rst6").css({
                "background": "#27F32C",
                "border-radius": "5px 5px",
                "padding": "2px"
            });
        } else {
            $("#rst6").css({
                "background": "#27F32C",
                "border-radius": "5px 5px",
                "padding": "2px"
            });
        }

        var rest7 = $("input[name='rst7']:checked").val();
        if (rest7 == respuestasCorrectas[7]) {
            suma += valor;
            $("#rst7").css({
                "background": "#27F32C",
                "border-radius": "5px 5px",
                "padding": "2px"
            });
        } else {
            $("#rst7").css({
                "background": "#27F32C",
                "border-radius": "5px 5px",
                "padding": "2px"
            });
        }

        var rest8 = $("input[name='rst8']:checked").val();
        if (rest8 == respuestasCorrectas[8]) {
            suma += valor;
            $("#rst8").css({
                "background": "#27F32C",
                "border-radius": "5px 5px",
                "padding": "2px"
            });
        } else {
            $("#rst8").css({
                "background": "#27F32C",
                "border-radius": "5px 5px",
                "padding": "2px"
            });
        }

        var n = '<input type="text" id="notaf" value="' + suma.toFixed(2) + '" disabled></input>';

        document.getElementById("nota").innerHTML = n;

        var nota = document.getElementById("notaf").value;
        if (nota >= 3) {
            document.getElementById("estado").innerHTML = "Aprobado";
        } else {
            document.getElementById("estado").innerHTML = "Reprobado";

        }
        $("#pregunta0").css({ "display": "block" });
        $("#pregunta1").css({ "display": "block" });
        $("#pregunta2").css({ "display": "block" });
        $("#pregunta3").css({ "display": "block" });
        $("#pregunta4").css({ "display": "block" });
        $("#pregunta5").css({ "display": "block" });
        $("#pregunta6").css({ "display": "block" });
        $("#pregunta7").css({ "display": "block" });
        $("#pregunta8").css({ "display": "block" });
        $("#Terminartest").css({ "display": "none" });
        $("#back").css({ "display": "none" });
        $("#items").css({ "display": "none" });
        $("#pRealizadas").css({ "display": "none" });

    } else {
        alert("Falta preguntas Por responder");
    }

}

function color() {
    var rest;
    var cont = 0;
    if ($("input[name='rst']").is(':checked')) {
        $("#item").css({ "background": "#CCCCCC" });
        cont += 1;
    }

    if ($("input[name='rst1']").is(':checked')) {
        $("#item1").css({ "background": "#CCCCCC" });
        cont += 1;
    }

    if ($("input[name='rst2']").is(':checked')) {
        $("#item2").css({ "background": "#CCCCCC" });
        cont += 1;
    }

    if ($("input[name='rst3']").is(':checked')) {
        $("#item3").css({ "background": "#CCCCCC" });
        cont += 1;
    }

    if ($("input[name='rst4']").is(':checked')) {
        $("#item4").css({ "background": "#CCCCCC" });
        cont += 1;
    }

    if ($("input[name='rst5']").is(':checked')) {
        $("#item5").css({ "background": "#CCCCCC" });
        cont += 1;
    }

    if ($("input[name='rst6']").is(':checked')) {
        $("#item6").css({ "background": "#CCCCCC" });
        cont += 1;
    }

    if ($("input[name='rst7']").is(':checked')) {
        $("#item7").css({ "background": "#CCCCCC" });
        cont += 1;
    }

    if ($("input[name='rst8']").is(':checked')) {
        $("#item8").css({ "background": "#CCCCCC" });
        cont += 1;
    }
    document.getElementById("pRealizadas").innerHTML = cont + " Preguntas Realizadas de 9 posibles";
}


//Siguiente pregunta
$("#next").click(function () {
    color();
    var mi_indice = ((parseInt($("#indc").val())) + (1));
    pag(mi_indice);


});


//Anterior pregunta
$("#back").click(function () {
    color();
    var mi_indice = ((parseInt($("#indc").val())) - (1));
    pag(mi_indice);
});

$("#Terminartest").click(function () {
    comprobar();
});


//desabilitar debotones siguiente  o anterior
function desabilitarControl() {
    if ($("#indc").val() == 0) {
        $("#back").css({ "display": "none" });
        $("#next").css({ "display": "block" });
        $("#Terminartest").css({ "display": "none" });
    } else if ($("#indc").val() == 8) {
        $("#next").css({ "display": "none" });
        $("#back").css({ "display": "block" });
        $("#Terminartest").css({ "display": "block" });
    } else {
        $("#back").css({ "display": "block" });
        $("#next").css({ "display": "block" });
        $("#Terminartest").css({ "display": "none" });
    }
}


