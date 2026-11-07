const petals = document.getElementById("petals");
const hearts = ["💗", "🌸", "✨", "💕", "🌺"];

function spawnPetal() {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${7 + Math.random() * 7}s`;
    petal.style.fontSize = `${0.9 + Math.random()}rem`;
    petals.appendChild(petal);
    setTimeout(() => petal.remove(), 15000);
}

setInterval(spawnPetal, 420);
for (let i = 0; i < 12; i += 1) {
    setTimeout(spawnPetal, i * 180);
}

const letter = document.getElementById("letter");
document.getElementById("openLetter").addEventListener("click", () => {
    letter.hidden = false;
    letter.scrollIntoView({ behavior: "smooth", block: "center" });
});

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const answer = document.getElementById("answer");

function moveNoButton() {
    const box = noBtn.parentElement.getBoundingClientRect();
    const x = Math.random() * Math.max(40, box.width - 90) - 20;
    const y = Math.random() * 70 - 20;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", (event) => {
    event.preventDefault();
    moveNoButton();
});

yesBtn.addEventListener("click", () => {
    answer.hidden = false;
    noBtn.style.display = "none";
    yesBtn.textContent = "Тоже да 💞";
});
