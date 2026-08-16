
const edge = document.createElement("div");
edge.className = "tech-edge";
document.body.appendChild(edge);

let angle = 0;

function animateEdge() {
    angle += 0.6;

    edge.style.background = `
        conic-gradient(
            from ${angle}deg,
            transparent 0deg,
            transparent 300deg,
            #00c8ff 330deg,
            #00f0ff 350deg,
            transparent 360deg
        )
    `;

    requestAnimationFrame(animateEdge);
}

animateEdge();
