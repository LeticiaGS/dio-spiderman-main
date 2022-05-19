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
