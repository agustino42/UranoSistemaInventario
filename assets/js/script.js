// script.js

// Lista de productos de ejemplo (puedes modificarla según tus necesidades)
const products = [
    { name: "Producto 1", price: 10.50 },
    { name: "Producto 2", price: 15.00 },
    { name: "Producto 3", price: 8.75 }
  ];
  
  // Función para actualizar la lista de productos
  function updateProductList() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
  }
  
