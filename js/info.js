const info = document.getElementById('info')

export function showInfoText(text){
    info.style.display = "block"
    info.innerHTML = text
};

export function hideInfoText(){
    info.style.display = "none"
};
