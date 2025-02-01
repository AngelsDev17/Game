const dialogBox = document.getElementById("dialog-box");
const subtitle = document.getElementById("subtitle");
const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");

const messages = [
  "Estas segura...?",
  "Yo sé que si quieres:)",
  "No te resistas más... 🫣",
];

const noButtonMessages = [
  "Segura?",
  "Mentirosa",
  "Quieres...",
  "¿Verdad?",
  "Piensalo:)",
];

const btnYesFunction = () => {
  dialogBox.innerHTML = `
    <img src="img/image2.gif" class="image" alt="Una imagen bonita">
    <h1 class="subtitle">Siempre supe que querías 🙈</h1>
    <p class="text"><b>Melanny, mi niña linda,</b></p>
    <p class="text">Nuestra conexión es única. La plenitud y madurez que tenemos individualmente son la clave para entendernos, apoyarnos y compartir nuestros sueños, tanto personales como de pareja.</p>
    <p class="text">Cada momento a tu lado ha sido la mejor inversión, y deseo seguir compartiendo mi amor y mi tiempo contigo...</p>
    <p class="text"><b>Con todo mi amor,</b> Migue ❤️</p>
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
