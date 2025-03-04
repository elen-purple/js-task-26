import {
  notice,
  success,
  error,
  defaultModules,
} from "../../node_modules/@pnotify/core/dist/PNotify.js";
import * as PNotifyMobile from "../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js";

defaultModules.set(PNotifyMobile, {});

const startBtn = document.querySelector("#keys-start");
const resetBtn = document.querySelector("#keys-reset");
const keysOutput = document.querySelector("#keys-output");
const scoreOutput = document.querySelector("#score-output");
const keys = [
  {
    name: "KeyA",
    letter: "a",
  },
  {
    name: "KeyR",
    letter: "r",
  },
  {
    name: "KeyF",
    letter: "f",
  },
  {
    name: "KeyC",
    letter: "c",
  },
  {
    name: "KeyL",
    letter: "l",
  },
  {
    name: "KeyS",
    letter: "s",
  },
  {
    name: "KeyM",
    letter: "m",
  },
  {
    name: "KeyP",
    letter: "p",
  },
  {
    name: "KeyX",
    letter: "x",
  },
  {
    name: "KeyH",
    letter: "h",
  },
];
let currentIndex = 0;
let currentKey = {};
let isPlaying = false;
let score = 0;

resetBtn.style.display = "none";

function getCurrentKey() {
  if (currentIndex >= keys.length) {
    currentIndex = 0;
  }
  const currentItem = keys[currentIndex];
  keysOutput.textContent = currentItem.letter;
  currentIndex += 1;
  return currentItem;
}

window.addEventListener("keydown", (e) => {
  if (!isPlaying) {
    return;
  }
  if (currentKey.name === e.code) {
    score += 1;
    scoreOutput.textContent = score;
    currentKey = getCurrentKey();
    success({
      text: "The key is right.",
    });
  } else {
    error({
      text: "The key is wrong",
    });
  }
});

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  resetBtn.style.display = "block";
  isPlaying = true;
  currentKey = getCurrentKey();
});

resetBtn.addEventListener("click", () => {
  notice({
    text: "You have reseted the game",
  });
  score = 0;
  scoreOutput.textContent = score;
  currentIndex = 0;
  currentKey = getCurrentKey();
});
