document.addEventListener("DOMContentLoaded", function(){
    var triggerDiv = document.getElementById("readme");
    var contentDiv = document.getElementById("bottomtext");

    triggerDiv.onclick = function() {
      if(contentDiv.style.display === "none") {
        contentDiv.style.display = "block";
      } else {
        contentDiv.style.display = "none";
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
});
