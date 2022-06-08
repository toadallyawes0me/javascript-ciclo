class Pedido {
    constructor(producto, precio, cantidad) {
        this.producto = producto,
        this.precio = precio,
        this.cantidad = cantidad,
        this.envio = 0,
        this.subTotal = 0,
        this.total = 0
    }
    calcularSubTotal() {
        this.subTotal = this.precio * this.cantidad;
    }
    calcularEnvio() {
        if (this.subTotal >= 5000) {
            this.envio = 0;
        } else {
            this.envio = 700;
        }
    }
    calcularTotal() {
        this.total = this.subTotal +  this.envio ;
    }
}

// Función para realizar un pedido
const pedidoProducto = () => {
    let producto = 0;
    let cantidadProducto = 0;
    let precio = 0;

    while ( producto == 0 || producto > 4 || !producto) {
        producto = parseInt(prompt("¿Qué producto desea comprar?:\n 1: Queso($5000)\n 2: Jamon($1800)\n 3: Salame italiano($2000)\n 4: Queso cabra($7300)"));
    }

    switch(producto) {
        case 1:
            producto = "Queso";
            precio= 5000;
            break;
        case 2:
            producto = "Jamon";
            precio = 1800;
            break;
        case 3:
            producto = "Salame italiano";
            precio = 2000;
            break;
        case 4:
            producto = "Queso cabra";
            precio = 7300;
            break;
    }

    while( cantidadProducto == 0 || !cantidadProducto ) {
        cantidadProducto = parseInt(prompt("Producto elegido: "+ producto + "\n Introduzca la cantidad deseada.(Solo números)"));
    }

    const compra = new Pedido(producto, precio, cantidadProducto);

    return compra;
};

alert("Bienvenido/a la tienda online");

const pedido = pedidoProducto();

// Actualizamos los valores con los métodos de la clase pedido
pedido.calcularSubTotal();
pedido.calcularEnvio();
pedido.calcularTotal();

alert("Detalle del pedido:\n\n"+
    "- "+pedido.producto+ " x " +pedido.cantidad+ ": $"+pedido.precio * pedido.cantidad +"\n" +
    "- Costo de envío: $"+pedido.envio+ "\n\n" +
    "Total = $" +pedido.total
);