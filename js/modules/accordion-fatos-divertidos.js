export default function initAccordionFatosDivertidos(){
  const fatos = document.querySelectorAll('[data-tab="accordion"] dt');
  if(fatos){
    fatos[0].classList.add('ativo');
    fatos[0].nextElementSibling.classList.add('ativo');
  
    function showAccordion(){
      this.classList.toggle('ativo')
      this.nextElementSibling.classList.toggle('ativo')
    }
  
    fatos.forEach(item => {
      item.addEventListener('click', showAccordion);
    })
  }
  
}



