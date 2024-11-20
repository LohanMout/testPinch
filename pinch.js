var pseudoCanvas = document.getElementById("canvas");
var h1 = document.querySelector("h1");
var zoom = 100;
var exDistance = null;
window.addEventListener('wheel', function (e) {
     zoom -= e.deltaY / 100
     pseudoCanvas.style.transform = "scale(" + zoom + "%)"
});

window.addEventListener("touchmove", (e) => {
    var touch = e.touches || e.changedTouches;
    if(touch.length == 0){
        pseudoCanvas.style.backgroundColor = "red";
    } else if (touch.length == 1){
        pseudoCanvas.style.backgroundColor = "yellow";
    } else if (touch.length == 2){
        pseudoCanvas.style.backgroundColor = "green";
    } else if (touch.length > 2){
        pseudoCanvas.style.backgroundColor = "purple";
    }
    
    if(touch.length >= 1){
        var doigt1 = e.touches[0];
        var doigt2 = e.touches[1];
        if(doigt2 != undefined){
            var distance = trouverCTriangle(doigt1.clientX, doigt2.clientX, doigt1.clientY, doigt2.clientY);
            if(exDistance != null){
                zoom += exDistance - distance;
                pseudoCanvas.style.transform = "scale(" + zoom + "%)"
            }
            exDistance = distance;
        } else {
            h1.innerHTML = "juste 1 doigté";
        }
    }
});

window.addEventListener("touchend", (e)=>{
    pseudoCanvas.style.backgroundColor = "rgb(155, 184, 255)";
    h1.innerHTML = "peut etr fini?"
    exDistance = null;
});

function trouverCTriangle(px1, px2, py1, py2){
    var cH = Math.abs(px1 - px2);
    var cV = Math.abs(py1 - py2);
    return Math.sqrt(cH**2 + cV**2);
}
