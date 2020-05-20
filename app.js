const keys = Array.from(document.querySelectorAll(".key"));
const help = document.querySelector(".help");
const helpModal = document.querySelector(".help-modal");

const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};

const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
};

const helpSlider = () => {
  if (helpModal.classList.contains("slide-reverse")) {
    helpModal.classList.remove("slide-reverse");
    helpModal.classList.add("slide");
  } else {
    helpModal.classList.remove("slide");
    helpModal.classList.add("slide-reverse");
  }
};

const app = () => {
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );
  window.addEventListener("keydown", playSound);
  help.addEventListener("click", helpSlider);
};

app();
