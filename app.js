const keys = Array.from(document.querySelectorAll('.key'));

const removeTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
};

const playSoundKeyboard = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
};

const findKeyCode = (keyCode) => {
  console.log(keyCode);
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
};

const playSoundClick = (e) => {
  if (e.srcElement.id === 'clap') {
    findKeyCode(81);
  } else if (e.srcElement.id === 'openhat') {
    findKeyCode(87);
  } else if (e.srcElement.id === 'hihat') {
    findKeyCode(69);
  } else if (e.srcElement.id === 'kick') {
    findKeyCode(82);
  } else if (e.srcElement.id === 'snare') {
    findKeyCode(84);
  } else if (e.srcElement.id === 'ride') {
    findKeyCode(89);
  } else if (e.srcElement.id === 'tom') {
    findKeyCode(74);
  } else if (e.srcElement.id === 'tink') {
    findKeyCode(75);
  } else if (e.srcElement.id === 'boom') {
    findKeyCode(76);
  }
};

const app = () => {
  window.addEventListener('keydown', playSoundKeyboard);

  keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition);
    key.addEventListener('click', playSoundClick);
    key.addEventListener('touch', playSoundClick);
  });
};

app();
