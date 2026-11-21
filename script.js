
// ===================================
// IMAGEM PRINCIPAL
// ===================================

const heroImage = document.getElementById("hero-image");

const imagePlaceholder = document.getElementById("image-placeholder");

// Caso a imagem carregue normalmente
heroImage.addEventListener("load", () => {

  heroImage.style.display = "block";

  imagePlaceholder.style.display = "none";

});

// Caso a imagem ainda não exista
heroImage.addEventListener("error", () => {

  heroImage.style.display = "none";

  imagePlaceholder.style.display = "flex";

});

// Verifica imagens já carregadas
if (heroImage.complete) {

  if (heroImage.naturalWidth > 0) {

    heroImage.style.display = "block";

    imagePlaceholder.style.display = "none";

  } else {

    heroImage.style.display = "none";

    imagePlaceholder.style.display = "flex";

  }
}

// =====================================
// IMAGEM DA SEÇÃO COMO FUNCIONA
// =====================================

const comoFuncionaImage = document.getElementById(
  "como-funciona-image"
);

const comoFuncionaPlaceholder = document.getElementById(
  "como-funciona-placeholder"
);

function verificarImagemComoFunciona() {
  if (!comoFuncionaImage || !comoFuncionaPlaceholder) {
    return;
  }

  const imagemExiste = comoFuncionaImage.naturalWidth > 0;

  comoFuncionaImage.style.display = imagemExiste
    ? "block"
    : "none";

  comoFuncionaPlaceholder.style.display = imagemExiste
    ? "none"
    : "flex";
}

if (comoFuncionaImage) {
  comoFuncionaImage.addEventListener(
    "load",
    verificarImagemComoFunciona
  );

  comoFuncionaImage.addEventListener(
    "error",
    verificarImagemComoFunciona
  );

  if (comoFuncionaImage.complete) {
    verificarImagemComoFunciona();
  }
}

// ========================================
// GALERIA DOS PERSONAGENS
// ========================================

(function () {
  const modal = document.getElementById("visor-modelo");
  const modalImage = modal?.querySelector(".visor-imagen");
  const closeButton = modal?.querySelector(".visor-cerrar");

  if (!modal || !modalImage || !closeButton) return;

  document.querySelectorAll(".personaje-card").forEach((card) => {
    const img = card.querySelector(".personaje-imagen img");
    const container = card.querySelector(".personaje-imagen");
    const button = card.querySelector(".personaje-ver");

    if (!img || !container || !button) return;

    function checkImage() {
      const loaded = img.naturalWidth > 0;

      container.classList.toggle("sem-imagem", !loaded);
      button.disabled = !loaded;
    }

    img.addEventListener("load", checkImage);
    img.addEventListener("error", checkImage);

    if (img.complete) checkImage();

    button.addEventListener("click", () => {
      if (!img.naturalWidth) return;

      modalImage.src = img.currentSrc || img.src;
      modalImage.alt = img.alt;
      modal.showModal();
    });
  });

  closeButton.addEventListener("click", () => {
    modal.close();
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
})();

// =====================================
// SEÇÃO 4 - IMAGENS DAS UTILIZAÇÕES
// =====================================

document.querySelectorAll(".uso-foto").forEach((container) => {

  const img = container.querySelector("img");

  if (!img) return;

  function verificarImagem() {
    const carregou = img.naturalWidth > 0;

    container.classList.toggle(
      "is-missing",
      !carregou
    );
  }

  img.addEventListener("load", verificarImagem);
  img.addEventListener("error", verificarImagem);

  if (img.complete) {
    verificarImagem();
  }

});

// ==========================================
// SEÇÃO 6 - IMAGENS DA ENTREGA DIGITAL
// ==========================================

(function () {

  const imagensEntrega = document.querySelectorAll(
    ".entrega-imagem"
  );

  imagensEntrega.forEach((container) => {

    const img = container.querySelector("img");

    if (!img) return;

    function verificarImagem() {

      const carregou = img.naturalWidth > 0;

      container.classList.toggle(
        "sem-imagem",
        !carregou
      );

    }

    img.addEventListener("load", verificarImagem);

    img.addEventListener("error", verificarImagem);

    if (img.complete) {
      verificarImagem();
    }

  });

})();

// ==========================================
// SEÇÃO 7 - IMAGENS DOS BÔNUS
// ==========================================

(function () {

  const bonusImages = document.querySelectorAll(
    ".bonus-imagen"
  );

  bonusImages.forEach((container) => {

    const img = container.querySelector("img");

    if (!img) return;

    function verificarImagemBonus() {

      const carregou = img.naturalWidth > 0;

      container.classList.toggle(
        "sem-imagem",
        !carregou
      );

    }

    img.addEventListener(
      "load",
      verificarImagemBonus
    );

    img.addEventListener(
      "error",
      verificarImagemBonus
    );

    if (img.complete) {
      verificarImagemBonus();
    }

  });

})();

// ==========================================
// SEÇÃO 8 - CONFIGURAÇÃO DOS CHECKOUTS
// ==========================================

// Coloque os links reais aqui

const checkoutLinks = {
  basico: "",
  completo: ""
};

// Botões

const botaoBasico = document.getElementById(
  "checkout-basico"
);

const botaoCompleto = document.getElementById(
  "checkout-completo"
);

// Configura um botão de checkout

function configurarCheckout(botao, link) {

  if (!botao) return;

  if (link && /^https?:\/\//i.test(link)) {

    botao.href = link;

  } else {

    botao.href = "#";

    botao.addEventListener("click", function(evento) {

      evento.preventDefault();

      alert(
        "El enlace de pago estará disponible próximamente."
      );

    });

  }

}

// Ativa os dois botões

configurarCheckout(
  botaoBasico,
  checkoutLinks.basico
);

configurarCheckout(
  botaoCompleto,
  checkoutLinks.completo
);

// ==========================================
// SEÇÃO 10 - FAQ INTERATIVO
// ==========================================

(function () {

  const perguntas = document.querySelectorAll(
    ".faq-natal .faq-item"
  );

  perguntas.forEach((pergunta) => {

    pergunta.addEventListener("toggle", () => {

      if (!pergunta.open) return;

      perguntas.forEach((outraPergunta) => {

        if (outraPergunta !== pergunta) {
          outraPergunta.open = false;
        }

      });

    });

  });

})();
