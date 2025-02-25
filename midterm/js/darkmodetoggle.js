// script.js

document.getElementById("calculate").addEventListener("click", function () {
  let num = parseInt(document.getElementById("factorial-input").value);
  let result = factorial(num);
  document.getElementById("result-screen").textContent = `${num}! = ${result}`;
});

document.getElementById("dark-mode").addEventListener("click", function () {
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");
});

document.getElementById("light-mode").addEventListener("click", function () {
  document.body.classList.add("light-mode");
  document.body.classList.remove("dark-mode");
});

function factorial(n) {
  if (n < 0) return "Invalid input";
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
