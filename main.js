const btnNo = document.getElementById("btn-no");

btnNo.style.transition = "transform 0.5s ease-in-out";

const btnNoFunction = () => {
  const x = Math.random() * 300 - 225;
  const y = Math.random() * -500 - 50;

  btnNo.style.transform = `translate(${x}px, ${y}px)`;
};

btnNo.addEventListener("mouseover", btnNoFunction);
btnNo.addEventListener("click", btnNoFunction);
