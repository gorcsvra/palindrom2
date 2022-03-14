document.getElementById("btn").addEventListener("click", function () {
  let str = document.getElementById("input").value;
  palindrome(str);
});




function palindrome(str) {
  let reverse = "";
  let result = document.getElementById("result");
  let robotScreen = document.getElementById("robotScreen");
  let convertToLower = str.toLowerCase();
  str = convertToLower.replace(/ /g, "");
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  if (str === reverse) {
    result.textContent = "Palindrom!";
    robotScreen.textContent = "IGAZ";
    robotScreen.className = "igaz";
    robotScreen.element.setInterval();
    return result;
  } else {
    result.textContent = "Nem palindrom!";
    robotScreen.textContent = "HAMIS";
    robotScreen.className = "hamis";
    robotScreen.element.setInterval();
    return result;
  }
}

function toDisplay() {
  document.getElementById("robot").style.display = "grid";
}
function screenTime() {
  setInterval
}
const element = document.getElementById("robotScreen");
setInterval(function() {element.className ="wait"}, 4000);




