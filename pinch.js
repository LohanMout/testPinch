var pseudoCanvas = document.getElementById("canvas");
var zoom = 100;

window.addEventListener('wheel', function (e) {
     zoom -= e.deltaY / 100
     pseudoCanvas.style.transform = "scale(" + zoom + "%)"
});

window.addEventListener("touchmove", (e) => {
    var touch = e.touches[0] || e.changedTouches[0];
    pseudoCanvas.style.backgroundColor = "green";
    console.log("CA BOUGE");
});
