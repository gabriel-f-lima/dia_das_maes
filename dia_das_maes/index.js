const listaFrases = [
    "Mãe, você é a luz que ilumina meu caminho, o amor que aquece meu coração e a força que me impulsiona.",
    "Obrigado por cada abraço, cada conselho e cada sorriso. Você é meu maior tesouro!",
    "Nenhuma palavra descreve o quanto você é especial. Te amo eternamente, mãe!",
    "Sua força e sua doçura me guiam todos os dias. Você é inspiração pura!",
    "Para o mundo você é uma mãe, mas para mim você é o mundo todo."
];

const listaImagens = [
    "imagem.jpg",
    "imagem2.jpg",
    "imagem3.jpg",
    "imagem4.jpg",
    "imagem5.jpg"
];

const fraseElemento = document.getElementById("frase");
const imagemElemento = document.getElementById("imagem");
const loveMessage = document.getElementById('love-message');

let indiceAtual = 0;

function iniciar() {
    if (fraseElemento) fraseElemento.textContent = listaFrases[0];
    if (imagemElemento) imagemElemento.src = listaImagens[0];
}

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa partículas se a biblioteca carregar
    if (window.particlesJS) {
        particlesJS("particles-canvas", {
            particles: {
                number: { value: 50 },
                color: { value: ["#8d5d4e", "#e6b4aa", "#ffffff"] },
                shape: { type: "circle" },
                opacity: { value: 0.4 },
                size: { value: 3 },
                move: { enable: true, speed: 1.5 }
            }
        });
    }
    iniciar();
});

function proximafoto() {
    if (!imagemElemento || !fraseElemento) return;

    imagemElemento.style.opacity = '0';
    fraseElemento.style.opacity = '0';

    setTimeout(() => {
        indiceAtual = (indiceAtual + 1) % listaImagens.length;
        imagemElemento.src = listaImagens[indiceAtual];
        fraseElemento.textContent = listaFrases[indiceAtual % listaFrases.length];

        imagemElemento.style.opacity = '1';
        fraseElemento.style.opacity = '1';
        createConfetti();
    }, 400);
}

function showLoveMessage() {
    if (loveMessage) {
        loveMessage.classList.remove('hidden');
        loveMessage.style.display = 'flex';
        createHeartRain();
    }
}

// Fecha a mensagem ao clicar
if (loveMessage) {
    loveMessage.addEventListener('click', function() {
        this.classList.add('hidden');
        setTimeout(() => { this.style.display = 'none'; }, 500);
    });
}

function createParticle(x, y, char) {
    const p = document.createElement('div');
    p.innerHTML = char;
    p.style.position = 'fixed';
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    p.style.zIndex = '1000';
    p.style.pointerEvents = 'none';
    p.style.animation = `fall 3s linear forwards`;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 3000);
}

function createConfetti() {
    for (let i = 0; i < 10; i++) {
        createParticle(Math.random() * window.innerWidth, -20, '✨');
    }
}

function createHeartRain() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createParticle(Math.random() * window.innerWidth, -20, '💖');
        }, i * 100);
    }
}

// CSS das animações via JS
const style = document.createElement('style');
style.textContent = `
    @keyframes fall { to { transform: translateY(105vh) rotate(360deg); opacity: 0; } }
    #imagem, #frase { transition: opacity 0.4s ease-in-out; }
`;
document.head.appendChild(style);