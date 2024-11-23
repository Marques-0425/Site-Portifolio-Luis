/* document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Opcional: Desconecta o observador após a ativação
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); // 50% do elemento visível na tela
  
  elementsobre.forEach(element => observer.observe(element));
  elementsobresubtitulo1.forEach(element => observer.observe(element));
  elementsobretexto1.forEach(element => observer.observe(element));
  elementsobresubtitulo2.forEach(element => observer.observe(element));
  elementsobretexto2.forEach(element => observer.observe(element));
  elementsobresubtitulo3.forEach(element => observer.observe(element));
  elementsobretexto3.forEach(element => observer.observe(element));
});

const elementsobre = document.querySelectorAll('.sobre');
const elementsobresubtitulo1 = document.querySelectorAll('.sobre-subtitulo1');
const elementsobretexto1 = document.querySelectorAll('.sobre-texto1');
const elementsobresubtitulo2 = document.querySelectorAll('.sobre-subtitulo2');
const elementsobretexto2 = document.querySelectorAll('.sobre-texto2');
const elementsobresubtitulo3 = document.querySelectorAll('.sobre-subtitulo3');
const elementsobretexto3 = document.querySelectorAll('.sobre-texto3');

//////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Opcional: Desconecta o observador após a ativação
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); // 50% do elemento visível na tela
  
  elementlinhadireita1.forEach(element => observer.observe(element));
});

const elementlinhadireita1 = document.querySelectorAll('.linha-direita1');
const elementlinhaesquerda1 = document.querySelectorAll('.linha-esquerda1');