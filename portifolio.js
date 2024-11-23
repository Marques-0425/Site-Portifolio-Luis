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
});

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

  const elementprojetostitulo = document.querySelectorAll('.projetos-titulo');
  const linhaprojetospessoaisesquerda1 = document.querySelectorAll('.linha-projetos-pessoais-esquerda1');
  const elementprojetospessoais = document.querySelectorAll('.projetos-pessoais');
  const elementlinhaprojetospessoaisdireita1 = document.querySelectorAll('.linha-projetos-pessoais-direita1');
  const elementsitepessoal1 = document.querySelectorAll('.site-pessoal1');
  const elementsitepessoal2 = document.querySelectorAll('.site-pessoal2');
  const elementsitepessoal3 = document.querySelectorAll('.site-pessoal3');
  const elementsitepessoal4 = document.querySelectorAll('.site-pessoal4');
  const elementsitepessoal5 = document.querySelectorAll('.site-pessoal5');
  const elementsitepessoal6 = document.querySelectorAll('.site-pessoal6');


  elementprojetostitulo.forEach(element => observer.observe(element));
  linhaprojetospessoaisesquerda1.forEach(element => observer.observe(element));
  elementprojetospessoais.forEach(element => observer.observe(element));
  elementlinhaprojetospessoaisdireita1.forEach(element => observer.observe(element));
  elementsitepessoal1.forEach(element => observer.observe(element));
  elementsitepessoal2.forEach(element => observer.observe(element));
  elementsitepessoal3.forEach(element => observer.observe(element));
  elementsitepessoal4.forEach(element => observer.observe(element));
  elementsitepessoal5.forEach(element => observer.observe(element));
  elementsitepessoal6.forEach(element => observer.observe(element));
});


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

  const sections1 = document.querySelectorAll('.aside2');
  const elementlinhaprojetosprofissionaisesquerda2 = document.querySelectorAll('.linha-projetos-profissionais-esquerda2');
  const elementprojetosprofissionais = document.querySelectorAll('.projetos-profissionais');
  const elementlinhaprojetosprofissionaisdireita2 = document.querySelectorAll('.linha-projetos-profissionais-direita2');
  const elementsiteprofissional1 = document.querySelectorAll('.site-profissional1');
  const elementsiteprofissional2 = document.querySelectorAll('.site-profissional2');
  const elementsiteprofissional3 = document.querySelectorAll('.site-profissional3');
  const elementsiteprofissional4 = document.querySelectorAll('.site-profissional4');
  const elementsiteprofissional5 = document.querySelectorAll('.site-profissional5');
  const elementsiteprofissional6 = document.querySelectorAll('.site-profissional6');

  sections1.forEach(section => observer.observe(section));
  
  elementlinhaprojetosprofissionaisesquerda2.forEach(element => observer.observe(element));
  elementprojetosprofissionais.forEach(element => observer.observe(element));
  elementlinhaprojetosprofissionaisdireita2.forEach(element => observer.observe(element));
  elementsiteprofissional1.forEach(element => observer.observe(element));
  elementsiteprofissional2.forEach(element => observer.observe(element));
  elementsiteprofissional3.forEach(element => observer.observe(element));
  elementsiteprofissional4.forEach(element => observer.observe(element));
  elementsiteprofissional5.forEach(element => observer.observe(element));
  elementsiteprofissional6.forEach(element => observer.observe(element));
});