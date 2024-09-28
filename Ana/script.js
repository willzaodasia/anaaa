const simButton = document.getElementById('sim');
const naoButton = document.getElementById('nao');
const animacaoDiv = document.getElementById('animacao');

function moverBotaoNao() {
  const maxX = window.innerWidth - naoButton.offsetWidth;
  const maxY = window.innerHeight - naoButton.offsetHeight;
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  naoButton.style.left = `${newX}px`;
  naoButton.style.top = `${newY}px`;
}

function criarCoracao(x, y) {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');

  const cores = ['vermelho', 'azul', 'verde'];
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  coracao.classList.add(corAleatoria);

  const emojis = ['❤️', '🩷', '🧡', '💛', '💚', '💙', '🩵', '💜', '🤎', '🖤', '🩶', '🤍', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '❤️‍🔥', '❤️‍🩹', '🫶', '♥️', '💌'];
  const emojiAleatorio = emojis[Math.floor(Math.random() * emojis.length)];
  coracao.textContent = emojiAleatorio;

  coracao.style.left = `${x}px`;
  coracao.style.top = `${y}px`;

  document.body.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 1500);
}

document.body.style.backgroundImage = "url('https://www.shutterstock.com/g/heart-background')";

let timer = setTimeout(() => {}, 15000);

simButton.addEventListener('click', () => {
  simButton.style.display = 'none';
  naoButton.style.display = 'none';
  animacaoDiv.style.display = 'block';
  clearTimeout(timer);
});

document.addEventListener('mousemove', (e) => {
  const naoButtonRect = naoButton.getBoundingClientRect();
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const distance = Math.sqrt(
    Math.pow(mouseX - (naoButtonRect.left + naoButtonRect.width / 2), 2) +
    Math.pow(mouseY - (naoButtonRect.top + naoButtonRect.height / 2), 2)
  );

  if (distance < 100) {
    moverBotaoNao();
  }
});

naoButton.style.left = `${simButton.offsetLeft + simButton.offsetWidth + 10}px`;
naoButton.style.top = `${simButton.offsetTop}px`;

document.addEventListener('click', (e) => {
  criarCoracao(e.clientX, e.clientY);
});

document.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  criarCoracao(touch.clientX, touch.clientY);
});
