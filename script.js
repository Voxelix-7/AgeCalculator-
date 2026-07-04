let calculateBtn = document.getElementById("calculateBtn");
let birthYearInput = document.getElementById("birthYear");
let result = document.getElementById("result");
calculateBtn.addEventListener ('click', function(){
  let birthYear = birthYearInput.value;
  if (birthYear === "" || birthYear < 1920 || birthYear > 2026) {
    result.textContent = "Please enter a valid birth year";
    return;
  }
  let age = 2026 - birthYear;
  result.textContent = "Your Age is " + age;
})
