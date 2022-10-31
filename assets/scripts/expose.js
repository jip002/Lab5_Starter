// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();

const horn_select = document.querySelector("#horn-select");
const horns = Array.from(horn_select.children);
//-------------------------------------------------------------------
const air_horn = horns[1];
const car_horn = horns[2];
const party_horn = horns[3];
//-------------------------------------------------------------------
const expose = document.querySelector("#expose");
const childrens = Array.from(expose.children);
var origin_img = childrens[1];
//-------------------------------------------------------------------
var audio = document.querySelector(".hidden");
//-------------------------------------------------------------------
const buttons = document.getElementsByTagName("button");
const play = buttons[0];
//-------------------------------------------------------------------
const control = document.getElementById("volume-controls");
const controls = control.children;
const range = controls[0];
const rangeImg = controls[1];
//-------------------------------------------------------------------
var isParty = false;

horn_select.addEventListener('change', e => {
  if(e.target.value == air_horn.value){
    origin_img.src = "assets/images/air-horn.svg";
    audio.src = "assets/audio/air-horn.mp3";
    isParty = false;
  }
  else if(e.target.value == car_horn.value){
    origin_img.src = "assets/images/car-horn.svg";
    audio.src = "assets/audio/car-horn.mp3";
    isParty = false;
  }
  else if(e.target.value == party_horn.value){
    origin_img.src = "assets/images/party-horn.svg";
    audio.src = "assets/audio/party-horn.mp3";
    isParty = true;
  }
  else isParty = false;
});

play.addEventListener('click', e => {
  if(isParty == true){
    jsConfetti.addConfetti();
  }
  audio.play();
});

range.addEventListener('change', e => {
  const value = range.value;
  if(value == 0){
    rangeImg.src = "assets/icons/volume-level-0.svg";
  }
  else if(value > 1 && value < 33){
    rangeImg.src = "assets/icons/volume-level-1.svg";
  }
  else if(value > 33 && value < 67){
    rangeImg.src = "assets/icons/volume-level-2.svg";
  }
  else{
    rangeImg.src = "assets/icons/volume-level-3.svg";
  }
  audio.volume = range.value / 100;
});
}