document.getElementById("btn").onclick = function(){
    var sticker1 = Number(document.getElementById('sticker1').value);
    var sticker2 = Number(document.getElementById('sticker2').value);
    var sticker3 = Number(document.getElementById('sticker3').value);

    var sticker =sticker1 + sticker2 + sticker3

    if(sticker <= 10){
        var msg = "Llevas " +  sticker + " sticker"
         document.getElementById("aviso").innerHTML = msg
    }else{
        var msg = "Llevas demasiados stickers!"
         document.getElementById("aviso").innerHTML = msg
    }
    
}
