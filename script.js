// Mostrar o botão apenas quando o usuário rolar a página
window.addEventListener("scroll", () => {
  const scrollToTopButton = document.getElementById("rolagemparaoinicio");
  const scrollDuration = 100000000000000000000000000; // Tempo em milissegundos
  if (window.scrollY > 200) { // Ajuste o valor conforme necessário
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Rolar suavemente para o topo ao clicar no botão
document.getElementById("rolagemparaoinicio").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const btmenumobile = document.querySelector('#btmenumobile')
const barra1 = document.querySelector('.barra1')
const barra2 = document.querySelector('.barra2')
const barra3 = document.querySelector('.barra3')
const navmobile = document.querySelector('#nav-mobile')

const body = document.querySelector('body')

btmenumobile.addEventListener("click", ()=> {
  barra1.classList.toggle('ativo1')
  barra2.classList.toggle('ativo2')
  barra3.classList.toggle('ativo3')
  navmobile.classList.toggle('abrir')

  body.classList.toggle('no-overflow')
})

const menuDiv = document.getElementById("btmenumobile");

menuDiv.addEventListener("click", () => {
  menuDiv.classList.toggle("rotated");
})

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

  sections.forEach(section => observer.observe(section));
  
  elementsobre.forEach(element => observer.observe(element));
  elementsobresubtitulo1.forEach(element => observer.observe(element));
  elementsobretexto1.forEach(element => observer.observe(element));
  elementsobresubtitulo2.forEach(element => observer.observe(element));
  elementsobretexto2.forEach(element => observer.observe(element));
  elementsobresubtitulo3.forEach(element => observer.observe(element));
  elementsobretexto3.forEach(element => observer.observe(element));
});

const sections = document.querySelectorAll('.aside2');
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

  sections.forEach(section => observer.observe(section));
  
  elementlinhadireita1.forEach(element => observer.observe(element));
  elementprojetospessoaistitulo.forEach(element => observer.observe(element));
  elementlinhaesquerda1.forEach(element => observer.observe(element));
  elementprojetospessoaistexto.forEach(element => observer.observe(element));
  elementsitepessoal1.forEach(element => observer.observe(element));
  elementsitepessoal2.forEach(element => observer.observe(element));
  elementsitepessoal3.forEach(element => observer.observe(element));
  elementsitepessoal4.forEach(element => observer.observe(element));
  elementsitepessoal5.forEach(element => observer.observe(element));
  elementsitepessoal6.forEach(element => observer.observe(element));
  elementprojetopessoaisfinalizacao.forEach(element => observer.observe(element));
});

const elementlinhadireita1 = document.querySelectorAll('.linha-direita1');
const elementprojetospessoaistitulo = document.querySelectorAll('.projetos-pessoais-titulo');
const elementlinhaesquerda1 = document.querySelectorAll('.linha-esquerda1');
const elementprojetospessoaistexto = document.querySelectorAll('.projetos-pessoais-texto');
const elementsitepessoal1 = document.querySelectorAll('.site-pessoal1');
const elementsitepessoal2 = document.querySelectorAll('.site-pessoal2');
const elementsitepessoal3 = document.querySelectorAll('.site-pessoal3');
const elementsitepessoal4 = document.querySelectorAll('.site-pessoal4');
const elementsitepessoal5 = document.querySelectorAll('.site-pessoal5');
const elementsitepessoal6 = document.querySelectorAll('.site-pessoal6');
const elementprojetopessoaisfinalizacao = document.querySelectorAll('.projetos-pessoais-finalizacao');