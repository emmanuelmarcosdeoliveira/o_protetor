document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const question = document.querySelectorAll("[data-faq-question]");

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

  for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", abreFechaResposta);
  }
});

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
