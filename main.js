function venderVideojuego(juego){
    switch (juego){
        case "spiderman":
            return precio = 10;
            break;
        case "pes":
            return precio = 20;
            break;
        case "fortnite":
            return precio = 30;
            break;
        case "dark souls":
            return precio = 40;
            break;
        default:
            alert( "juego no disponible, ingrese(spiderman, pes, fortnite, dark souls)")
            return;
    }
}

let precio;
let saldo = parseInt(prompt("Ingrese su saldo actual"))
let juego = prompt("ingrese un videojuego")
let resultado = saldo - venderVideojuego(juego)

if (precio <= saldo) {alert (`Has comprado ${juego}. Su saldo actual es $${resultado}`);
}else{
    alert(`Dinero insuficiente. ${juego} tiene un $${precio}`)
}

