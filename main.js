
/* OBJETOS, ARRAYS, METODOS DE ARRAYS, */



const listaPrendas = [
    {nombre: "remera", precio: 800, marca: "adidas" },
    {nombre: "camisa", precio: 300, marca: "pepito" },
    {nombre: "chaleco", precio: 1600, marca: "moncler" },
    {nombre: "jean", precio: 900, marca: "gucci" },
    {nombre: "jogging", precio: 600, marca: "puma" },
];
let carrito = []

let eleccion = prompt(`hola bienvenido, desea usted realizar una comprar? si o no?`);

while(eleccion != "si" && eleccion != "no"){
    alert("por favor ingrese si o no")
    eleccion = prompt(`hola bienvenido, desea usted realizar una comprar? si o no?`);
};

if(eleccion == "si"){
    alert(`Aquí tiene nuestra lista de productos`)
    let todasLasPrendas = listaPrendas.map(
        (prenda) => prenda.nombre + " " + prenda.precio + "$"
    );
    alert(todasLasPrendas.join(" - "))
} else if (eleccion == "no" ){
alert("Gracias por venir, vuelva prontos.")
};

while(eleccion != "no"){
    let prenda = prompt("agrega una prenda a tu carrito")
    let precio = 0

    if(prenda == "remera" || prenda == "camisa" || prenda == "chaleco" || prenda == "jean" || prenda == "jogging"){
        switch (prenda) {
            case "remera":
                precio = 800;
                break;
            case "camisa":
                precio = 300;
                break;
            case "chaleco":
                precio = 1600;
                break;
            case "jean":
                precio = 900;
                break;
            case "jogging":
                precio = 600;
                break;
            default:
            break;
        }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"))

    carrito.push({prenda, unidades, precio})
    console.log(carrito)
    } else{
        alert("no tenemos esa prenda")
    }

    eleccion = prompt("desea seguir comprando?")

    while (eleccion === "no"){
        alert("Gracias por su compra, vuelva prontos.")
        carrito.forEach((carritoFinal) => {
            console.log(`prenda: ${carritoFinal.prenda}, unidades: ${carritoFinal.unidades}, precio total a pagar por prenda: $${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    } 
}

