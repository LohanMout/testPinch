var pseudoCanvas = document.getElementById("canvas");
var zoom = 100;

window.addEventListener('wheel', function (e) {
     zoom -= e.deltaY / 100
     pseudoCanvas.style.transform = "scale(" + zoom + "%)"
});
