export const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");
export const imgAutoCar = document.getElementById("imgAutoCar");
export const imgCrazyCar = document.getElementById("imgCrazyCar");
export const imgPlayer = document.getElementById("imgPlayer");
export const imgInvisible = document.getElementById("imgInvisible");
export const imgBoost = document.getElementById("imgBoost");
export const imgCar = document.getElementById("imgCar");
export const imgGoal = document.getElementById("imgGoal");


export function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function changeBackground(background) {
  canvas.style.backgroundImage = `url('../img/${background}')`;
}
