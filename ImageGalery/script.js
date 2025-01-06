let posImage = 0; // posicion de la imagen actual
let posColor = 0; // posicion del color

const changeImage = () => {
  const image = document.getElementById("image");
  
  // Lista de imágenes
  const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.webp", "image5.jpeg", "image6.webp"];
  
  // Incrementa el índice de la imagen, y reinicia al llegar al final de la lista
  posImage = (posImage + 1) % images.length;
  
  // Actualiza la imagen que se tiene que ver
  image.src = images[posImage];
};

const changeBackground = () =>{
  const colors = ["#131646","#3c4c8f","#64c27b","#3591d8","#2a8c4a","#9bfab0","#588100"]//lista de colores

  posColor = (posColor + 1) % colors.length; // Cambia al siguiente color
  document.body.style.backgroundColor = colors[posColor]; // Cambia el color de fondo

} 

  