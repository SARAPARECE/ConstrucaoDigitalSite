const root = document.documentElement;
const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

/* Menu mobile */
function closeMenu() {
  if (!menu || !menuToggle) return;
  menu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
}

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

/* Sombra do cabeçalho ao fazer scroll */
function updateHeader() {
  if (header) header.classList.toggle('scrolled', window.scrollY > 8);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

/* Link ativo no menu */
const sections = document.querySelectorAll('main section[id]');
const menuLinks = menu ? Array.from(menu.querySelectorAll('a[href^="#"]')) : [];

if ('IntersectionObserver' in window && menuLinks.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        menuLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  sections.forEach((section) => sectionObserver.observe(section));
}

/* Animação de entrada */
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealElements.forEach((el) => observer.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add('visible'));
}

/* Destaques: rotação automática, setas e indicadores. */
(function () {
  const carousel = document.querySelector('.highlights .carousel');
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(carousel.querySelectorAll('.slide'));
  const previous = document.querySelector('.highlights .carousel-prev');
  const next = document.querySelector('.highlights .carousel-next');
  const dots = document.querySelector('.highlights .carousel-dots');
  if (!track || slides.length < 2) return;

  let current = 0;
  let timer;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (dots) {
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Mostrar destaque ${index + 1}`);
      dot.addEventListener('click', () => {
        show(index);
        restart();
      });
      dots.appendChild(dot);
    });
  }

  function show(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    if (dots) {
      Array.from(dots.children).forEach((dot, position) => {
        dot.setAttribute('aria-selected', String(position === current));
      });
    }
  }

  function restart() {
    window.clearInterval(timer);
    if (!reducedMotion) timer = window.setInterval(() => show(current + 1), 7000);
  }

  if (previous) previous.addEventListener('click', () => { show(current - 1); restart(); });
  if (next) next.addEventListener('click', () => { show(current + 1); restart(); });
  carousel.addEventListener('mouseenter', () => window.clearInterval(timer));
  carousel.addEventListener('mouseleave', restart);
  carousel.addEventListener('focusin', () => window.clearInterval(timer));
  carousel.addEventListener('focusout', restart);
  show(0);
  restart();
})();

/* Faixas horizontais de cartões */
(function () {
  document.querySelectorAll('.faixa').forEach((faixa) => {
    const cabecalho = faixa.previousElementSibling;
    const anterior = cabecalho && cabecalho.querySelector('.faixa-anterior');
    const seguinte = cabecalho && cabecalho.querySelector('.faixa-seguinte');

    function passo() {
      const primeiro = faixa.firstElementChild;
      if (!primeiro) return faixa.clientWidth;
      const estilo = window.getComputedStyle(faixa);
      return primeiro.getBoundingClientRect().width + parseFloat(estilo.columnGap || estilo.gap || 24);
    }

    function mover(direcao) {
      faixa.scrollBy({ left: direcao * passo(), behavior: 'smooth' });
    }

    if (anterior) anterior.addEventListener('click', () => mover(-1));
    if (seguinte) seguinte.addEventListener('click', () => mover(1));

    function estado() {
      const fim = faixa.scrollWidth - faixa.clientWidth - 2;
      if (anterior) anterior.disabled = faixa.scrollLeft <= 2;
      if (seguinte) seguinte.disabled = faixa.scrollLeft >= fim;
    }

    faixa.addEventListener('scroll', estado, { passive: true });
    window.addEventListener('resize', estado);
    estado();

    faixa.addEventListener('keydown', (evento) => {
      if (evento.key === 'ArrowRight') { evento.preventDefault(); mover(1); }
      if (evento.key === 'ArrowLeft') { evento.preventDefault(); mover(-1); }
    });
  });
})();

/* Formulário de candidatura */
document.querySelectorAll('.formulario').forEach(function (form) {
  const nota = form.querySelector('.form-nota');
  const endpoint = form.dataset.endpoint;
  const destino = form.dataset.destino;

  /* Curso pré-escolhido pelo link: candidatura.html?curso=... */
  const parametros = new URLSearchParams(location.search);
  const cursoPedido = parametros.get('curso');
  const percursoPedido = parametros.get('percurso');
  const campoCurso = form.querySelector('[name="curso"]');
  const campoPercurso = form.querySelector('[name="percurso"]');

  function escolher(campo, valor) {
    if (!campo || !valor) return;
    const opcao = Array.from(campo.options).find(
      (o) => o.value.toLowerCase() === valor.toLowerCase()
    );
    if (opcao) campo.value = opcao.value;
  }

  escolher(campoCurso, cursoPedido);
  escolher(campoPercurso, percursoPedido);

  /* Sem endpoint configurado, abre o programa de email já preenchido. */
  if (endpoint) return;

  form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (!form.reportValidity()) return;

    const dados = new FormData(form);
    const assunto = dados.get('assunto') || dados.get('_subject') || 'Contacto pelo site';
    const linhas = [
      'Nome: ' + (dados.get('nome') || ''),
      'Email: ' + (dados.get('email') || ''),
      'Telefone: ' + (dados.get('telefone') || '')
    ];
    if (dados.get('curso')) linhas.push('Curso: ' + dados.get('curso'));
    if (dados.get('percurso')) linhas.push('Percurso: ' + dados.get('percurso'));
    if (dados.get('mensagem')) linhas.push('', dados.get('mensagem'));

    const url =
      'mailto:' +
      destino +
      '?subject=' +
      encodeURIComponent(assunto) +
      '&body=' +
      encodeURIComponent(linhas.join('\n'));

    window.location.href = url;

    if (nota) {
      nota.textContent =
        'Abrimos o teu programa de email com a mensagem escrita. Falta só carregares em enviar.';
      nota.classList.add('visivel');
    }
  });
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
