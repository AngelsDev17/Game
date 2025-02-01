const dialogBox = document.getElementById("dialog-box");
const subtitle = document.getElementById("subtitle");
const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");

const messages = [
  "¿Segura que no quieres...?",
  "Yo sé que si quieres:)",
  "No te resistas más...",
];

const noButtonMessages = [
  "Segura?",
  "Mentirosa",
  "Tú quieres...",
  "No huyas...",
  "A ti te gustaría...",
  "¿De verdad?",
  "Piensalo:)",
];

const btnYesFunction = () => {
  dialogBox.innerHTML = `
    <img src="img/image2.gif" class="image" alt="Una imagen bonita">
    <h1 class="title">Siempre supe que querías</h1>
    <p class="text">Me encantas 🥰</p>
    `;
};

var counter = 0;

const btnNoFunction = () => {
  if (counter < messages.length) {
    subtitle.innerHTML = messages[counter];
    counter++;
  }

  if (counter < messages.length) {
    return;
  }

  const x = Math.random() * 300 - 225;
  const y = Math.random() * -500 - 50;

  btnNo.textContent =
    noButtonMessages[Math.floor(Math.random() * noButtonMessages.length)];

  btnNo.style.transform = `translate(${x}px, ${y}px)`;
};

btnYes.addEventListener("click", btnYesFunction);
btnNo.addEventListener("click", btnNoFunction);
