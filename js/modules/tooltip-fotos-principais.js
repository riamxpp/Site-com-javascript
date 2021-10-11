export default function descricaoDasFotosPrincipais(){
  if(fotos){
    const fotos = document.querySelectorAll('[data-tooltip]');
    fotos.forEach(foto => {
      foto.addEventListener('mouseover', mouserOver);
    })
    
    function mouserOver(event){
      const toolTipBox = criandoTooltip(this);
    
      onMouseLeave.toolTipBox = toolTipBox 
      onMouseLeave.element = this 
      this.addEventListener('mouseleave', onMouseLeave);
    
      onMouseMove.toolTipBox = toolTipBox
      this.addEventListener('mousemove', onMouseMove);
    }
    
    const onMouseLeave = {
      handleEvent(){
        this.toolTipBox.remove();
        this.element.removeEventListener('mouseleave', onMouseLeave);
        this.element.removeEventListener('mousemove', onMouseMove);
      }
    }
    
    const onMouseMove = {
      handleEvent(event){
        this.toolTipBox.style.top = event.pageY + 20 + 'px'
        this.toolTipBox.style.left = event.pageX  + 20 + 'px'
      }
    }
    
    function criandoTooltip(element){
      const toolTipDiv = document.createElement('div');
      const texto = element.getAttribute('aria-label');
    
      toolTipDiv.classList.add('tooltip');
      toolTipDiv.innerText = texto
      document.body.appendChild(toolTipDiv);
      return toolTipDiv
    }
  }
}

