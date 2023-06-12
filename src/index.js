// Función para formatear el precio
function formatPrice(price) {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(price);
  }
  
  const url = "https://platzi-avo.vercel.app/api/avo";
  const baseUrl = "https://platzi-avo.vercel.app";
  const appNode = document.querySelector("#app");
  
  // Consumir la API
  window.fetch(`${baseUrl}/api/avo`)
    .then((respuesta) => respuesta.json())
    .then((responseJson) => {
      const container = document.createElement("div");
      container.className = "flex flex-wrap justify-center";
  
      responseJson.data.forEach(item => {
        const card = document.createElement("div");
        card.className = "max-w-sm rounded overflow-hidden shadow-lg bg-white mx-2 my-4";
  
        const imagen = document.createElement("img");
        imagen.src = `${baseUrl}${item.image}`;
        imagen.className = "w-full";
        card.appendChild(imagen);
  
        const contenido = document.createElement("div");
        contenido.className = "px-6 py-4";
  
        const titulo = document.createElement("h2");
        titulo.textContent = item.name;
        titulo.className = "font-bold text-xl mb-2";
        contenido.appendChild(titulo);
  
        const precio = document.createElement("div");
        precio.textContent = formatPrice(item.price);
        precio.className = "text-gray-600";
        contenido.appendChild(precio);
  
        card.appendChild(contenido);
        container.appendChild(card);
      });
  
      appNode.appendChild(container);
    });
  