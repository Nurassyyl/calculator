const inputNumber = document.querySelector(".svelte-u824j0");
const sum = document.querySelector('.svelte-br80q');

inputNumber.addEventListener('input', (e) => {
  let price = e.target.value;
  if (price <= 1000) {
    pricePercent = (price / 100) * 50 + (price / 1);
    sum.textContent = pricePercent + " ₽";
  } else if (price > 1000 && price <= 3000) {
    pricePercent = (price / 100) * 40 + (price / 1);
    sum.textContent = pricePercent + " ₽";
  } else if (price > 3000 && price <= 5000) {
    pricePercent = (price / 100) * 35 + (price / 1);
    sum.textContent = pricePercent + " ₽";
  } else {
    pricePercent = (price / 100) * 30 + (price / 1);
    sum.textContent = pricePercent + " ₽";
  }
  // const cartStorage = localStorage.getItem('cart') || "[]";
  // const cart = JSON.parse(cartStorage);
  // const card = { title, pricePercent };
  // localStorage.setItem("cart", JSON.stringify([...cart, card]));
})