const cardsElem = document.querySelectorAll('.card')
cardsElem.forEach((card) => {
  card.addEventListener('click', () => {
    console.log('cicked')
  })
})
