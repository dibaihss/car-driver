export const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");



export function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function changeBackground(background) {

   // https://q5q6q2e3.stackpathcdn.com/wp-content/uploads/2020/01/unity-2d-racing-game-tutorial-scrolling-clouds.gif
   
  canvas.style.backgroundImage = `url('../img/${background}')`;
}
