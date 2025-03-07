document.addEventListener("DOMContentLoaded", function () {
    const text = "SERRURIER EN URGENCE 24/7";
    const container = document.getElementById("typing-text");
    let index = 0;

    function typeEffect() {
        container.innerHTML = "";
        index = 0;
        function typing() {
            if (index < text.length) {
                container.innerHTML += text.charAt(index);
                index++;
                setTimeout(typing, 150);
            } else {
                setTimeout(() => typeEffect(), 3000); // Efface et recommence après 3s
            }
        }
        typing();
    }

    typeEffect();
});
