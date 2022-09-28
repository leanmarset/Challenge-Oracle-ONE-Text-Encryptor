function encriptar() {
    var text = document.getElementById("text-input").value.toLowerCase();
    var textEncrip = text.replace(/e/igm, "enter");
    var textEncrip = textEncrip.replace(/o/igm, "ober");
    var textEncrip = textEncrip.replace(/i/igm, "imes");
    var textEncrip = textEncrip.replace(/a/igm, "ai");
    var textEncrip = textEncrip.replace(/u/igm, "ufat");

    document.getElementById("imgRight").style.display = "none";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").innerHTML = textEncrip;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function desencriptar() {
    var text = document.getElementById("text-input").value.toLowerCase();
    var textEncrip = text.replace(/enter/igm, "e");
    var textEncrip = textEncrip.replace(/ober/igm, "o");
    var textEncrip = textEncrip.replace(/imes/igm, "i");
    var textEncrip = textEncrip.replace(/ai/igm, "a");
    var textEncrip = textEncrip.replace(/ufat/igm, "u");

    document.getElementById("imgRight").style.display = "none";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").innerHTML = textEncrip;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function copy() {
    var content = document.querySelector("#text2");
    content.select();
    document.execCommand("copy");
    alert("Se copió el texto")
}

