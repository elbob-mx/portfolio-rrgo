const cursorTrail = document.querySelector("cursor");
const ball = cursorTrail.querySelector("ball");

document.addEventListener("mousemove", function(event) {
    cursor.style.left = event.pageX + "px";
    cursor.style.top = event.pageY + "px";
});