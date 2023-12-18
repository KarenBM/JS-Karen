// Funciones globales

const existeElementoId = (array, idReferencia) => {
  let existe = array.some(elemento => elemento.id === idReferencia); // valida si el id ya existe en el array
  return existe;
}

// Sección de productos
let idCompra = 1;
let productos = [];

class Producto {
  constructor(nombre, cantidad) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.id = idCompra;
  }
}

const agregarProducto = (producto) => {
  productos.push(producto);
  idCompra++
};

const eliminarProducto = (id) => {
  if (existeElementoId(productos, id)) {
    productos = productos.filter(producto => producto.id !== id);
  } else {
    alert("No existe ningún producto con ese ID");
  }
};

const mostrarProductos = () => {
  let nombresProductos = productos.map(producto => `ID: ${producto.id} - Nombre: ${producto.nombre}`);
  if (nombresProductos.length > 0) {
    alert(nombresProductos.join("\n"));
  } else {
    alert("No hay productos registrados");
  }
};

// Función para mostrar el menú principal
const menuPrincipal = () => {
  let estado = true;

  while (estado) {
    let opcion = parseInt(
      prompt(
        `
        Bienvenido a Menú de productos
        1 - Mostrar carrito
        2 - Agregar un producto al carrito
        3 - Eliminar un producto del carrito
        4 - Volver
        `
      )
    );

    switch (opcion) {
      case 1:
        mostrarProductos();
        break;
      case 2:
        let nombre = prompt("Ingrese el nombre del producto");
        let cantidad = prompt("Ingrese el cantidad del producto");
        let producto = new Producto(nombre, cantidad);
        agregarProducto(producto);
        break;
      case 3:
        let idProducto = parseInt(prompt("Ingrese el ID del producto a eliminar"));
        eliminarProducto(idProducto);
        break;
      case 4:
        estado = false;
        break;
      default:
        alert("Ingrese una opción válida");
        break;
    }
  }
};

// Llamamos a la función menuPrincipal al final del script
menuPrincipal();
