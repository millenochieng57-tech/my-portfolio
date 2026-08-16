document.addEventListener("DOMContentLoaded", () => {

    /* ===== INTERACTIVE BOXES ===== */
    const boxes = document.querySelectorAll(
        ".card, .box, .service-card, .project-card"
    );

    boxes.forEach(box => {
        box.style.transition = "transform .25s ease, box-shadow .25s ease";

        box.addEventListener("pointermove", e => {
            const r = box.getBoundingClientRect();
            const x = e.clientX - r.left;
            const y = e.clientY - r.top;

            const rotateX = (y / r.height - 0.5) * -5;
            const rotateY = (x / r.width - 0.5) * 5;

            box.style.transform =
                `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

            box.style.boxShadow =
                `${(x / r.width - 0.5) * 20}px ${(y / r.height - 0.5) * 20}px 30px rgba(0,220,255,.25)`;
        });

        box.addEventListener("pointerleave", () => {
            box.style.transform = "";
            box.style.boxShadow = "";
        });
    });


    /* ===== CREATE LIGHT EFFECTS ===== */

    const edge = document.createElement("div");

    edge.style.cssText = `
        position:fixed;
        inset:0;
        pointer-events:none;
        z-index:99999;
        border:2px solid transparent;
        border-radius:12px;
        background:
        linear-gradient(transparent,transparent) padding-box,
        conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 250deg,
            rgba(0,220,255,.9) 285deg,
            rgba(150,70,255,.9) 310deg,
            transparent 345deg
        ) border-box;
        animation: edgeRun 5s linear infinite;
    `;

    document.body.appendChild(edge);


    /* ===== LIGHT FOLLOWING YOUR FINGER / MOUSE ===== */

    const light = document.createElement("div");

    light.style.cssText = `
        position:fixed;
        width:140px;
        height:140px;
        border-radius:50%;
        pointer-events:none;
        z-index:99998;
        transform:translate(-50%,-50%);
        background:radial-gradient(
            circle,
            rgba(0,220,255,.12),
            transparent 70%
        );
    `;

    document.body.appendChild(light);

    document.addEventListener("pointermove", e => {
        light.style.left = e.clientX + "px";
        light.style.top = e.clientY + "px";
    });


    /* ===== ANIMATION ===== */

    const style = document.createElement("style");

    style.textContent = `
        @keyframes edgeRun {
            from {
                transform:rotate(0deg);
            }
            to {
                transform:rotate(360deg);
            }
        }
    `;

    document.head.appendChild(style);

});
