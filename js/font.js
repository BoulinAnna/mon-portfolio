// Préconnect
const preconnect = document.createElement("link");
preconnect.rel = "preconnect";
preconnect.href = "https://fonts.googleapis.com";
document.head.appendChild(preconnect);

const preconnect2 = document.createElement("link");
preconnect2.rel = "preconnect";
preconnect2.href = "https://fonts.gstatic.com";
preconnect2.crossOrigin = "anonymous";
document.head.appendChild(preconnect2);

// Charge Inter
const interFont = document.createElement("link");
interFont.rel = "stylesheet";
interFont.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap";
document.head.appendChild(interFont);
