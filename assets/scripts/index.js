function handleMouseEnter() {
  this.classList.add('s-card--hovered')
  document.body.id = `${this.id}-hovered`
}

function handleMouseLeave() {
  this.classList.remove('s-card--hovered')
  document.body.id = ` `
}

function cardsHover() {
  const cardElements = document.getElementsByClassName('s-card')

  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index]
    card.addEventListener('mouseenter', handleMouseEnter) //quando passa o mouse em cima
    card.addEventListener('mouseleave', handleMouseLeave) //quando tira o mouse de cima
  }
}

document.addEventListener('DOMContentLoaded', cardsHover)

function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id
  const carousel = document.querySelector('.s-cards-carousel')
  const transform = carousel.style.transform
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i)
  const rotateYDeg = -120 * (Number(selectedItem) - 1)
  const newTransform = transform.replace(
    rotateY[0],
    `rotateY(${rotateYDeg}deg)`
  )

  carousel.style.transform = newTransform

  const activeButtonElement = document.querySelector(
    '.s-controller__button--active'
  )
  activeButtonElement.classList.remove('s-controller__button--active')
  selectedButtonElement.classList.add('s-controller__button--active')
}
