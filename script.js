var numLimit = 1000;
var numText = "";

// dicionário

var unidades = {
    0: "zero",
    1: "um",
    2: "dois",
    3: "três",
    4: "quatro",
    5: "cinco",
    6: "seis",
    7: "sete",
    8: "oito",
    9: "nove"
}

var dezenas = {
    10: "dez",
    11: "onze",
    12: "doze",
    13: "treze",
    14: "quatorze",
    15: "quinze",
    16: "dezesseis",
    17: "dezessete",
    18: "dezoito",
    19: "dezenove"
}

var centenas = {
    1: "cento",
    2: "duzentos",
    3: "trezentos",
    4: "quatrocentos",
    5: "quinhentos",
    6: "seiscentos",
    7: "setecentos",
    8: "oitocentos",
    9: "novecentos"
}

var prefixos = {
    2: "vinte",
    3: "trinta",
    4: "quarenta",
    5: "cinquenta",
    6: "sessenta",
    7: "setenta",
    8: "oitenta",
    9: "noventa"
}


function converter() {

    numText = "";
    var num = document.getElementById('numInput').value
    var finalNumText = validarNum(num);
    var msg = window.document.getElementById('convertNum')

    msg.innerHTML = `A conversão é: ${finalNumText}`
}

function validarNum(num) {
    var absNum = Math.abs(num);

    if (num > numLimit) {
        alert(`O número é muito grande. Por favor, digite um número até ${numLimit} (mil)`)
    } else {
        twoDigitConvert(num);
    }

    return numText;
}

function twoDigitConvert(num) {
    var numString = num.toString()

    if (num < 10) {
        numText += unidades[num]
    } else if (num in dezenas) {
        numText += dezenas[num];
    } else if (num < 100) {
        numText += prefixos[numString.charAt(0)]

        if (numString.charAt(1) !== 0) {
            numText += " e " + unidades[numString.charAt(1)]
        }

    } else if (num < 1000) {
        numText += centenas[numString.charAt(0)]
        if (numString.charAt(1) == 1) {
            numText += " e " + dezenas[numString.charAt(1)]
        } else if (numString.charAt(1) > 1) {
            numText += " e " + prefixos[numString.charAt(1)]
        }

        if (numString.charAt(2) !== 0) {
            numText += " e " + unidades[numString.charAt(2)]
        }
    } else {
        numText = "mil"
    }
}