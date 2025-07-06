

const categories = [
    { nombre: "Celulares y paquetes", icon: "fa-solid fa-mobile-screen-button" },
    { nombre: "Donaciones", icon: "fa-solid fa-face-smile-beam" },
    { nombre: "Entretenimiento", icon: "fa-solid fa-film" },
    { nombre: "Finanzas", icon: "fa-solid fa-coins" },
    { nombre: "Negocios Nequi", icon: "fa-solid fa-store" },
    { nombre: "Seguridad y salud", icon: "fa-solid fa-heart-pulse" },
    { nombre: "Servicios Públicos", icon: "fa-solid fa-home" },
    { nombre: "Tienda virtual", icon: "fa-solid fa-cart-shopping" },
    { nombre: "Transporte y viajes", icon: "fa-solid fa-bus" },
];

const container = document.getElementById('categoriesGrid');
//  generamos los modales 
categories.forEach(cat => {
    const div = document.createElement('div');
    div.className = `Container_Grid__Modals__Categories`;
    div.innerHTML= `
    <i class="${cat.icon} fa-2x icon-style"></i>
    <p>${cat.nombre}</p>
    `;
    container.appendChild(div);
})
