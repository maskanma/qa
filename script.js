const counterEl = document.getElementById("counter");
const btn = document.getElementById("clickBtn");

btn.addEventListener("click", () => {
  let count = counterEl.textContent;
  count += 1;
  counterEl.textContent = count;
});
