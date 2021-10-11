export default function cardDestaque(){

}

const cards = document.querySelectorAll('.cards__lontras > div');
const classe = 'por__cima'

cards[1].classList.add(classe);
cards.forEach((item) => {
  item.addEventListener('click', ativandoCard);
})

function ativandoCard(){
  cards.forEach(item => {
    item.classList.remove(classe);
  })
  this.classList.add(classe)
}

