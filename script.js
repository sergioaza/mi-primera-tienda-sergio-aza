const productos = [
  {
    id: 1,
    nombre: "Redragon Auriculares para juegos con cable USB con sonido envolvente 7.1",
    descripcion: "Micrófono con cancelación de ruido, luz RGB, soporte para auriculares, controladores de 1.575 in, sobre la oreja para PC, PS4.",
    precio: 98000,
    imagen: "https://m.media-amazon.com/images/I/61Eh7kqBHTL._AC_SY355_.jpg"
  },
  {
    id: 2,
    nombre: "GravaStar Teclado mecánico inalámbrico para juegos Mercury K1 75% con",
    descripcion: "Montaje de junta, interruptores lineales intercambiables en caliente, teclado de sonido cremoso, 2.4 GHz/USB-C/Bluetooth 5.0",
    precio: 354000,
    imagen: "https://m.media-amazon.com/images/I/6144lt2l5JL._AC_SY355_.jpg"
  },
  {
    id: 3,
    nombre: "Womier SK80 75% Keyboard with Color Multimedia Display Gaming Keyboard",
    descripcion: "Creamy Sound Mechanical Wired Hot Swappable Gasket RGB Custom Key board, Pre-lubed Stabilizer for Mac/Win, Black Kanagawa",
    precio: 140000,
    imagen: "https://m.media-amazon.com/images/I/71hdClN+RtL._AC_SY355_.jpg"
  },
  {
    id: 4,
    nombre: "Razer Viper V3 HyperSpeed - Ratón inalámbrico para juegos para PC, 2.89 oz",
    descripcion: "Sensor óptico de 30 K DPI, hasta 280 horas de duración de la batería, interruptores mecánicos Gen-2, 6 botones programables",
    precio: 280000,
    imagen: "https://m.media-amazon.com/images/I/61LI6E0sJwL._AC_SL1500_.jpg"
  },
  {
    id: 5,
    nombre: "Razer Basilisk V3 Customizable RGB Wired Ergonomic Gaming Mouse, Black",
    descripcion: "Interruptor de mouse para juegos más rápido, iluminación Chroma RGB, sensor óptico de 26K DPI, 11 botones programables",
    precio: 112000,
    imagen: "https://m.media-amazon.com/images/I/61AcT0ZuO3L._AC_SY355_.jpg"
  }
];


/* ==============================
   CARRITO
================================ */

const carrito = [];

const contenedorProductos = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total");


/* ==============================
   MOSTRAR PRODUCTOS
================================ */

function mostrarProductos() {

  contenedorProductos.innerHTML = "";

  productos.forEach(prod => {

    const div = document.createElement("div");

    div.className = "producto";

    div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">

      <h3>${prod.nombre}</h3>

      <p class="descripcion">
        ${prod.descripcion}
      </p>

      <p class="precio">
        ${prod.precio.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0
        })}
      </p>

      <button onclick="agregarAlCarrito(${prod.id})">
        Agregar al carrito
      </button>
    `;

    contenedorProductos.appendChild(div);

  });

}


/* ==============================
   AGREGAR AL CARRITO
================================ */

function agregarAlCarrito(id) {

  const productoExistente =
    carrito.find(p => p.id === id);

  if (productoExistente) {

    productoExistente.cantidad++;

  } else {

    const producto =
      productos.find(p => p.id === id);

    carrito.push({
      ...producto,
      cantidad: 1
    });

  }

  actualizarCarrito();

}


/* ==============================
   ACTUALIZAR CARRITO
================================ */

function actualizarCarrito() {

  listaCarrito.innerHTML = "";

  let total = 0;
  let totalItems = 0;

  carrito.forEach(item => {

    const li =
      document.createElement("li");

    const subtotal =
      item.precio * item.cantidad;

    li.textContent =
      `${item.nombre} x${item.cantidad} — ` +
      subtotal.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
      });

    listaCarrito.appendChild(li);

    total += subtotal;
    totalItems += item.cantidad;

  });

  totalCarrito.textContent =
    total.toLocaleString("es-CO");

  actualizarTituloCarrito(totalItems);

}


/* ==============================
   CONTADOR DEL CARRITO
================================ */

function actualizarTituloCarrito(cantidad) {

  const titulo =
    document.querySelector(".carrito h2");

  titulo.textContent =
    `🧾 Carrito de Compras (${cantidad})`;

}


/* ==============================
   VACIAR CARRITO
================================ */

function vaciarCarrito() {

  if (carrito.length === 0) {

    alert("🛒 El carrito ya está vacío.");

    return;

  }

  if (
    confirm(
      "¿Estás seguro de que quieres vaciar el carrito?"
    )
  ) {

    carrito.length = 0;

    actualizarCarrito();

  }

}


/* ==============================
   FINALIZAR COMPRA
================================ */

function finalizarCompra() {

  if (carrito.length === 0) {

    alert(
      "🛒 Tu carrito está vacío. Agrega productos antes de finalizar la compra."
    );

    return;

  }

  alert(
    "🎉 ¡Pedido simulado confirmado!\n\n" +
    "En un eCommerce real, ahora entrarían en acción " +
    "el backend, la pasarela de pago y la logística."
  );

  carrito.length = 0;

  actualizarCarrito();

}


/* ==============================
   INICIAR TIENDA
================================ */

mostrarProductos();
