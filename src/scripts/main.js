document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const question = document.querySelectorAll("[data-faq-question]");
  const heroSection = document.querySelector('.hero');
  const alturaHero = heroSection.clientHeight;

  window.addEventListener('scroll', function(){
   const posicaoAtual = window.scrollY;
    if(posicaoAtual < alturaHero) {
     ocultaBotaoHeader();
    } else {
     exibeBotaoHeader(); 
    }
 
 
  })


  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (botao) {
      const abaAlvo = botao.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      escondeTodasAbas();
      aba.classList.add("is-active");
      removeBotaoAtivo();
      botao.target.classList.add("is--active");
    });
  }
  // Seção FAQ Acordion
  for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", abreFechaResposta);
  }
});

function ocultaBotaoHeader(){
  const header = document.querySelector('header');
 header.classList.add('header--is-hidden')
}

function exibeBotaoHeader(){
  const header = document.querySelector('header');
 header.classList.remove('header--is-hidden')
}


function abreFechaResposta(elemento) {
  const classe = "faq__question__item--is-open";
  const elementoPai =elemento.target.parentNode;
  elementoPai.classList.toggle(classe)
}

function removeBotaoAtivo() {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("is--active");
  }
}

function escondeTodasAbas() {
  const tabContainer = document.querySelectorAll("[data-tab-id]");
  for (let i = 0; i < tabContainer.length; i++) {
    tabContainer[i].classList.remove("is-active");
  }
}
