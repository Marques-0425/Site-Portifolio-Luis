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

document.getElementById('gmail-imagem').addEventListener('click', () => {
  const email = "luisoctavio0425@gmail.com";
  navigator.clipboard.writeText(email)
    .then(() => {
      alert('Endereço de e-mail copiado para a área de transferência!');
    })
    .catch(err => {
      console.error('Erro ao copiar o e-mail: ', err);
    });
});

const imagem = document.getElementById('gmail-imagem');
const tooltip = document.getElementById('tooltip');

  imagem.addEventListener('mouseover', (e) => {
    tooltip.style.display = 'block';
    tooltip.style.left = `${e.pageX + 10}px`;
    tooltip.style.top = `${e.pageY + 10}px`;
    tooltip.textContent = 'Clique para copiar o texto!';
  });

  imagem.addEventListener('mousemove', (e) => {
    tooltip.style.left = `${e.pageX + 10}px`;
    tooltip.style.top = `${e.pageY + 10}px`;
  });

  imagem.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
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
  const elementmande = document.querySelectorAll('.mande');
  const elementdetalhes = document.querySelectorAll('.detalhes');
  const elementmensagem = document.querySelectorAll('.mensagem');
  const elementnomeemail = document.querySelectorAll('.nome-email');
  
  sections1.forEach(section => observer.observe(section));
  
  elementmande.forEach(element => observer.observe(element));
  elementdetalhes.forEach(element => observer.observe(element));
  elementmensagem.forEach(element => observer.observe(element));
  elementnomeemail.forEach(element => observer.observe(element));
});