export default function initToolTipDasFotosSecundarias(){

}

const fotos = document.querySelectorAll('[data-tooltipSecundaria]');

fotos.forEach(foto => {
  foto.addEventListener('mouseover', onMouseOver)
})

function onMouseOver(){
  const toolTipBox = criandoToolTip(this);
  
  onMouseLeave.element = this
  onMouseLeave.toolTipBox = toolTipBox
  this.addEventListener('mouseleave', onMouseLeave);

  onMouseMove.toolTipBox = toolTipBox
  this.addEventListener('mousemove', onMouseMove);
}

const onMouseLeave = {
  handleEvent(){
    this.toolTipBox.remove()
    this.element.removeEventListener('mouseleave', onMouseLeave);
    this.element.removeEventListener('mousemove', onMouseMove);
  }
}

const onMouseMove = {
  handleEvent(event){
    this.toolTipBox.style.top = event.pageY + 20 + 'px';
    this.toolTipBox.style.left = event.pageX + 20 + 'px';
  }
}

function criandoToolTip(element){
  const tooltipBox = document.createElement('div');
  const text = element.getAttribute('aria-label');

  tooltipBox.classList.add('tooltip');
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  return tooltipBox;
}