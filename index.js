const target = document.getElementById("target");
let wordIndex = 0;

let textArray = [
  "openly",
  "automatically",
  "magicaly",
  "securely",
  "together.",
];

const wordGeneretor = () => {
  let word = document.createElement("span");
  target.appendChild(word);
  word.textContent = textArray[wordIndex];
  word.style.animation = "anim 3s ease-in-out";

  setTimeout(() => {
    if (wordIndex <= textArray.length) {
      word.remove();
    }
  }, 3000);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= textArray.length) {
      wordIndex = 0;
      loop();
    } else if (wordIndex < textArray.length) {
      wordGeneretor();
      wordIndex++;
      setTimeout(() => {
        loop();
      }, 3000);
    }
  }, 60);
};
loop();
