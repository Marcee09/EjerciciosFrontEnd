let posImage = 0; // posicion de la imagen actual

const changeImage = () => {
  const image = document.getElementById("image");
  
  // Lista de imágenes
  const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.webp", "image5.jpeg", "image6.webp"];
  
  // Incrementa el índice de la imagen, y reinicia al llegar al final de la lista
  posImage = (posImage + 1) % images.length;
  
  // Actualiza la imagen que se tiene que ver
  image.src = images[posImage];
};

  