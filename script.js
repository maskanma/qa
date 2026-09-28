const counterEl = document.getElementById("counter");
const btn = document.getElementById("clickBtn");

btn.addEventListener("click", () => {
  let count = Number(counterEl.textContent) + 1;
  counterEl.textContent = count;
});