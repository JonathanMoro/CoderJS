
const listaPrendas = [
    { id: "1", nombre: "remera", precio: 800, marca: "adidas" },
    { id: "2", nombre: "camisa", precio: 300, marca: "pepito" },
    { id: "3", nombre: "chaleco", precio: 1600, marca: "moncler" },
    { id: "4", nombre: "jean", precio: 900, marca: "gucci" },
    { id: "5", nombre: "jogging", precio: 600, marca: "puma" },
];

const carrito = []
let ver = document.getElementById("ver-carrito");

const agregar = (id) => {
    let producto = listaPrendas.find((item) => item.id === id);
    carrito.push(producto);
    const productosJson = JSON.stringify(carrito);
    localStorage.setItem("carrito", productosJson);
};


listaPrendas.forEach(Producto => {
    let div = document.createElement("div");
    div.innerHTML = `
        <h3>Producto: ${Producto.id}</h3> 
        <p>Nombre: ${Producto.nombre}</p>   
        <b>Precio: $${Producto.precio}</b>
        <button id="boton${Producto.id}">Agregar a carrito</button>
    `;

    document.body.append(div);

    let boton = document.getElementById(`boton${Producto.id}`);
    boton.addEventListener("click", () => agregar(Producto.id));
});



if (localStorage.getItem("carrito") == null) {
    const productosJson = JSON.stringify(carrito);
    localStorage.setItem("carrito", productosJson);
}


const recuperarDatos = JSON.parse(localStorage.getItem("carrito"))

ver.addEventListener("click", () => {
    recuperarDatos.forEach((Producto) => {
        let div = document.createElement("section");
        div.innerHTML = `
        <h3>Producto: ${Producto.id}</h3> 
        <p>Nombre: ${Producto.nombre}</p>   
        <b>Precio: $${Producto.precio}</b>
        <button id="boton${Producto.id}">Agregar a carrito</button>
       `;
        document.body.append(div);
    });
});
