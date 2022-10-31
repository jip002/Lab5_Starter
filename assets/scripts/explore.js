// explore.js

window.addEventListener('DOMContentLoaded', init);

const select = document.querySelector('#voice-select');
const explore = document.querySelector("#explore");
const childrens = Array.from(explore.children);
const face = childrens[1];
const button = childrens[4];
const text = document.querySelector('#text-to-speak');
const synth = window.speechSynthesis;
let voices = [];

function makeVoicelists() {
  voices = synth.getVoices();
  for (let i = 0; i < voices.length ; i++) {
    const voice = document.createElement('option');
    voice.textContent = `${voices[i].name} (${voices[i].lang})`;
    voice.setAttribute('data-lang', voices[i].lang);
    voice.setAttribute('data-name', voices[i].name);
    select.appendChild(voice);
  }
}
makeVoicelists();

if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = makeVoicelists;
}

button.addEventListener('click', e => {
  const utter = new SpeechSynthesisUtterance(text.value);
  const selected_option = select.selectedOptions[0].getAttribute('data-name');
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === selected_option) {
      utter.voice = voices[i];
    }
  }
  utter.addEventListener('end', e => {
    face.src="assets/images/smiling.png";
  })
  face.src= "assets/images/smiling-open.png";
  speechSynthesis.speak(utter);
})

function init() {
  // TODO
}