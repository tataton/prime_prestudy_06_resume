var showsUp, buttonText, content;

window.onload = function() {
  showsUp = true;
  console.log("showsUp initialized as:" + showsUp);
  buttonText = document.getElementById("buttonExplanation");
  content = document.getElementById("mainContent");
};

function disappear() {
  if (showsUp) {
    showsUp = false;
    buttonText.innerHTML = "to make my resume reappear!";
    content.className = "hidden";
  } else {
    showsUp = true;
    buttonText.innerHTML = "to make my resume disappear!";
    content.className = "visible";
  }
}
