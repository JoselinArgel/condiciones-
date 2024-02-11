document.getElementById("btn").onclick=function(){
    var dgt1 = document.getElementById("digito1").value;
    var dgt2 = document.getElementById("digito2").value;
    var dgt3 = document.getElementById("digito3").value;

    var dgt = dgt1 + dgt2 + dgt3

    if (dgt1 == 9 && dgt2 == 1 && dgt3 ==1){
        var msg = "Clave 1 correcta"
        document.getElementById("aviso").innerHTML = msg
    }else if(dgt1 == 7 && dgt2 == 1 && dgt3 ==4){
        var msg = "Clave 2 correcta"
        document.getElementById("aviso").innerHTML = msg
    }else {
        var msg = "contraseña incorrecta"
        document.getElementById("aviso").innerHTML = msg
    }
}
