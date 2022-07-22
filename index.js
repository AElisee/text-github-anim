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

  setTimeout(() => {
    if (wordIndex < textArray.length) {
      word.remove();
      word.classList.add("hidden");
    }
  }, 2500);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex < textArray.length) {
      wordGeneretor();
      target.classList.remove("hidden");
      target.classList.add("active");
      wordIndex++;
      setTimeout(() => {
        loop();
      }, 2500);
    }
  }, 60);
};
loop();
