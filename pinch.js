var pseudoCanvas = document.getElementById("canvas");
var zoom = 100;

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
    console.log(touch);
});

window.addEventListener("touchend", (e)=>{
    pseudoCanvas.style.backgroundColor = "rgb(155, 184, 255)";
});
