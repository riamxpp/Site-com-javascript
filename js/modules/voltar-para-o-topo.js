// export default function initVoltarParaTopo(){
//   const porcentagemDaTela = window.screen.width * 0.61;

//   function criandoDiv(){
//     const div = document.createElement('div');
//     const link = document.createElement('a');
  
//     link.innerText = 'Voltar para o top'
//     link.href = '#topo'
//     div.appendChild(link)
//     div.classList.add('volta__topo');
//     div.style.left = porcentagemDaTela + 'px'
//     document.body.appendChild(div)
//     return div
//   }
  
//   const div = criandoDiv();
//   window.addEventListener('scroll', subirTopo)
  
//   function subirTopo(){
//     if(window.scrollY > 300)
//       div.classList.add('ativo');
//     else
//       div.classList.remove('ativo');
//   }
  
//   div.addEventListener('click', scrollSuave);
  
//   function scrollSuave(event){
//     event.preventDefault();
//     console.log(this);
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "smooth"
//     })
//   }
// }



