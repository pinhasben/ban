const text = "SERRURIER EN URGENCE 24/7";
const container = document.getElementById("typing-text");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        container.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}

typeEffect();
