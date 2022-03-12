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
    result.textContent = "Palindrome!";
    robotScreen.textContent = "IGAZ";
    robotScreen.style.color = "green";
    return result;
  } else {
    result.textContent = "Not a palindrome!";
    robotScreen.textContent = "HAMIS";
    robotScreen.style.color = "red";
    return result;
  }
}

function toDisplay() {
  document.getElementById("robot").style.display = "grid";
}

