const content = document.querySelector('.content');
window.onmousemove = function(e){
    let x = e.clientX;
    let y = e.clientY;
    content.style.backgroundPositionX = x +"px";
    content.style.backgroundPositionY = y +"px";
}