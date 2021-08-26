export const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");

export function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function changeBackground(background) {
  if (background === "unity-2d-racing-game-tutorial-scrolling-clouds.gif") {
    canvas.style.backgroundImage = `url('https://q5q6q2e3.stackpathcdn.com/wp-content/uploads/2020/01/unity-2d-racing-game-tutorial-scrolling-clouds.gif')`;

    canvas.style.backgroundPositionX = "center";
  } else if (background === "ezgif.com-gif-maker.gif") {
    canvas.style.backgroundImage = `url('https://thumbs.dreamstime.com/z/seamless-road-texture-markup-straight-stretch-56448654.jpg')`;
    canvas.style.backgroundRepeat = "repeat-y";
    canvas.style.backgroundPositionX = "35px";
  } else {
    canvas.style.backgroundImage = `url('../img/${background}')`;
  }
}
export const Startbtn = document.getElementById('btn')