
const button = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");
const heartsContainer = document.getElementById("hearts");

button.addEventListener("click", () => {
    surprise.classList.toggle("hidden");

    if (surprise.classList.contains("hidden")) {
        button.textContent = "Clique para uma surpresa 💝";
    } else {
        button.textContent = "Uma surpresa para você! ❤️";
        createHearts(25);
    }
});

function createHeart() {
    const heart = document.createElement("span");

    heart.classList.add("heart");
    heart.textContent = ["❤️", "💕", "💗", "💖", "🌸"][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

function createHearts(amount) {
    for (let i = 0; i < amount; i++) {
        setTimeout(createHeart, i * 100);
    }
}

// Corações aparecendo continuamente
setInterval(createHeart, 700);
