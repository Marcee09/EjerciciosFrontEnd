//Definimos las variables globales
const circle = document.getElementById("circle");
const scoreValue = document.getElementById("score-value");
let score = 0;

const moveCircle = () => {//esta función se va a encargar de mover el circulo
  const gameArea = document.querySelector(".game-area"); //selecciona y guarda en una constante el contenedor donde se mueve el circulo
  const maxWidth = gameArea.offsetWidth - circle.offsetWidth;// calculo de area teniendo en cuenta el size del circulo para que no salga del area
  const maxHeight = gameArea.offsetHeight - circle.offsetHeight;

  const randomX = Math.floor(Math.random() * maxWidth);//genera una posicion aleatoria en ancho
  const randomY = Math.floor(Math.random() * maxHeight);// genera una posicion aleatoria en alto

  circle.style.left = `${randomX}px`;//convierte la posicion en px
  circle.style.top = `${randomY}px`;
}


circle.addEventListener("click", () => {//cuando se haga click en el circulo
  score++;//aumenta el puntaje
  scoreValue.textContent = score; //y lo cambia en el html
  moveCircle();//luego mueve el circulo
});

const startGame= () => { //comienza el juego
  let timeLeft = 10;//tiene 10 segundos para jugar
  const instructions = document.getElementById("instructions");//obtenemos las instrucciones
  instructions.textContent = `¡Tienes ${timeLeft} segundos!`;//vamos actualizando el tiempo

  const timer = setInterval(() => {//tiempo
    timeLeft--;//disminuye 
    instructions.textContent = `¡Tienes ${timeLeft} segundos!`;
    if (timeLeft <= 0) {//si el tiempo es menor o igual a cero, el juego termina
      clearInterval(timer);//borra el tiempo
      instructions.textContent = "¡Tiempo agotado!";//y agrega este texto
      circle.style.display = "none"; // Oculta el círculo
    }
  }, 1000);//setInterval 1 segundo

  moveCircle();
  circle.style.display = "block"; // Asegura que el círculo sea visible
}

startGame();//llamo a la funcion de comienzo del juego

