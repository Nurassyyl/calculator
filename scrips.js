const cards = document.querySelectorAll(".card");

cards.forEach((el, index) => {
  const btn = el.childNodes[5];
  const title = el.childNodes[1].innerText;
  const price = el.childNodes[3].innerText;

  btn.addEventListener('click', () => {
    if (price <= 1000) {
      pricePercent = (price / 100) * 50 + (price / 1);
    } else if (price > 1000 && price <= 3000) {
      pricePercent = (price / 100) * 40 + (price / 1);
    } else if (price > 3000 && price <= 5000) {
      pricePercent = (price / 100) * 35 + (price / 1);
    } else {
      pricePercent = (price / 100) * 30 + (price / 1);
    }
    const cartStorage = localStorage.getItem('cart') || "[]";
    const cart = JSON.parse(cartStorage);
    const card = { title, pricePercent };
    localStorage.setItem("cart", JSON.stringify([...cart, card]));
  })
})