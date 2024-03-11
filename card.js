const cartSide = document.querySelector('.cart');

const cartStorage = JSON.parse(localStorage.getItem('cart') || "[]");

if (cartStorage.length) {
  cartStorage.forEach(el => {
    const { title, pricePercent } = el
    const newCard = document.createElement('div');
    newCard.innerHTML = `<div class="card">
                        <h4 class="card__title">${title}</h4>
                        <p class="card__price">${pricePercent}</p>
                        <button>Удалить</button>
                      </div>`
    cartSide.appendChild(newCard);
  })
}