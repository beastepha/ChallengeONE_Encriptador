function criptografar() {
    var img = document.getElementsByClassName ("img")
    var resultado = document.getElementsByClassName ("resultado")
    var mensagem = document.getElementById ("mensagem").value
    var texto = document.getElementById ("texto")
    var areatexto = document.getElementById ("mensagem")
    var binario = "" 

    for (let i=0; i <mensagem.length; i++) {
        let charCode = mensagem.charCodeAt(i).toString(2); 
        binario += '0'.repeat(8 - charCode.length) + charCode;
    }
    
    if (mensagem !== "") {
        img[0].style.display = "none"
        resultado[0].style.display = "none"
        resultado[1].style.display = "none"
        texto.style.display = "block"
        areatexto.value=''

        texto.innerHTML=binario
    } else {
        img[0].style.display = "block"
        resultado[0].style.display = "block"
        resultado[1].style.display = "block"
        texto.style.display = "nome"

        alert ("Preencha o campo!") 
    }    
}

function descriptografar() {
    var img = document.getElementsByClassName ("img")
    var resultado = document.getElementsByClassName ("resultado")
    var mensagem = document.getElementById ("mensagem").value
    var texto = document.getElementById ("texto")
    var areatexto = document.getElementById ("mensagem")
    var textoConvertido = ""

    for (let i = 0; i < mensagem.length; i += 8) {
         let byte = mensagem.substr(i, 8);
         textoConvertido += String.fromCharCode(parseInt(byte, 2));
        }

    if (mensagem !== "") {
        img[0].style.display = "none"
        resultado[0].style.display = "none"
        resultado[1].style.display = "none"
        texto.style.display = "block"
        areatexto.value=''

        texto.innerHTML=textoConvertido
    } else {
        img[0].style.display = "block"
        resultado[0].style.display = "block"
        resultado[1].style.display = "block"
        texto.style.display = "nome"

        alert ("Preencha o campo!") 
    }
}

function dark () {
    var principal = document.getElementsByClassName ("principal")
    var areatexto = document.getElementById ("mensagem")
    var dark = document.getElementsByClassName ("dark")
    var light = document.getElementsByClassName ("light")


    dark[0].style.display = "none"
    light[0].style.display = "inline-block"
    principal[0].style.background = "black"
    areatexto.style.background = "black"

}

function light () {
    var principal = document.getElementsByClassName ("principal")
    var areatexto = document.getElementById ("mensagem")
    var dark = document.getElementsByClassName ("dark")
    var light = document.getElementsByClassName ("light")

    dark[0].style.display = "inline-block"
    light[0].style.display = "none"
    principal[0].style.background = "#E5E5E5"
    areatexto.style.background = "#E5E5E5"

}