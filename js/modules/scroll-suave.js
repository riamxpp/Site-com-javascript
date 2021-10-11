export default function scrollSuave(){
  const linksInternos = document.querySelectorAll('[data-links="internos"] a[href^="#"]');

  linksInternos.forEach(link =>{
    link.addEventListener('click', scrollToLink);
  });
  
  function scrollToLink(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const item = document.querySelectorAll(href);
    const topo = item[0].offsetTop - 20;
    console.log(topo);
    window.scrollBy({
      top: topo,
      behaviorr: 'smooth'
    })
  }
}

