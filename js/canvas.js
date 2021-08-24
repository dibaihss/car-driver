export const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');
const img = document.getElementById('playerCar')
export function clearCanvas(){
    ctx.clearRect(0,0, canvas.width ,canvas.height )
}

export function changeBackground(background){
    canvas.style.backgroundImage = `url('../img/${background}')`; 
   
}