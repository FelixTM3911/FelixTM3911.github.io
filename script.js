// Ich hasse js

document.getElementById("readme").onclick = function() {
  toggleDiv("bottomtext","readme");
};

function toggleDiv(id) {
  var div = document.getElementById(id);
  if (div.style.display === "none") {
      div.classList.add("fade-in");
      div.style.display = "block";
      setTimeout(() => {
          div.classList.remove("fade-in");
      }, 500);
  } else {
      div.classList.add("fade-out");
      setTimeout(() => {
          div.style.display = "none";
          div.classList.remove("fade-out");
      }, 500);
  }
}

document.getElementById('discord').addEventListener('click', changeText);

function changeText(){
  var text = document.getElementById('discord');
  if (text.innerHTML === "Discord") {
    text.innerHTML = "Felix_TM#3911";
  } else {
    text.innerHTML = "Discord";
  }
}

const typewriter = document.getElementById("copyright");

const delay = 3750;
const text = "© FelixTM - SfTb";
let i = 0;

setTimeout(function() {
  function type() {
  if (i < text.length) {
      typewriter.innerHTML += text[i];
      i++;
      let speed = Math.floor(Math.random() * (500 - 200 + 1) + 200);
      setTimeout(type, speed);
  }
  }
  type();
}, delay);
