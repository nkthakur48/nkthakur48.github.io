// Project Cards navigation
const cardsElem = document.querySelectorAll('.card')
cardsElem.forEach((cardElem) => {
  const link = cardElem.dataset.href
  cardElem.addEventListener('click', () => {
    window.location.href = link
  })
})
