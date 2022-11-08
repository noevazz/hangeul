let position = 1;
const amountOfCards = document.getElementById("cards").childElementCount;
const cards = document.getElementById("cards");
const cards_children = cards.children;
const counter = document.getElementById("counter");
const buttonNext = document.getElementById("next");
const buttonPrev = document.getElementById("prev");

document.getElementById('next').onclick = function() {
  if (position+1 <= amountOfCards) {
    position++;
    buttonPrev.disabled = false;
  }
  if (position===amountOfCards)
    this.disabled = true;
  change_card();
}

document.getElementById('prev').onclick = function() {
  if (position-1 > 0 ) {
    position--;
    buttonNext.disabled = false;
  }
  if (position === 1)
    this.disabled = true;
  change_card();
}

function change_card() {
  for (const child of cards_children) {
      child.style.display = "none";
  }
  cards_children[position-1].style.display = "block";
  counter.innerHTML = `${position}/${amountOfCards}`;
  document.getElementById("bar").style.width = `${
    (100 / amountOfCards) * position
  }%`;
  window.scrollTo(0, 0);
}

change_card();