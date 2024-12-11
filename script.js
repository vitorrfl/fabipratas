document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide"); // Seleciona todos os slides
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");

  let currentIndex = 0; // Slide ativo inicialmente

  // Atualiza a classe "active" no slide atual
  const updateActiveSlide = () => {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentIndex);
    });
  };

  // Botão "Next" (Avançar)
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length; // Avança e reinicia no final
    updateActiveSlide();
  });

  // Botão "Prev" (Voltar)
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Volta e reinicia no início
    updateActiveSlide();
  });

  // Chamada inicial para mostrar o slide ativo
  updateActiveSlide();
});
