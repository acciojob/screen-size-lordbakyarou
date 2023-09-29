//your JS code here. If required.

const h1 = document.getElementById("values");
h1.innerText = `Width: ${window.screen.width} and Height: ${window.screen.height}`;

window.addEventListener("resize", () => {
 h1.innerText = `Width: ${window.screen.width} and Height: ${window.screen.height}`;
});