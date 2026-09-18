const root = document.documentElement;
const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const themeToggle = document.querySelector('.theme-toggle');

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

/* Tema claro / escuro */
function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro');
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0c0f16' : '#ffffff');
}

applyTheme(root.getAttribute('data-theme') || 'light');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    try {
      sessionStorage.setItem('theme', nextTheme);
    } catch (e) {
      /* armazenamento indisponível */
    }
  });
}

/* Números com contagem ao entrar no ecrã */
(function () {
  const stats = Array.from(document.querySelectorAll('.stat'));
  if (!stats.length) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function count(stat) {
    stat.classList.add('counted');
    const value = stat.querySelector('strong');
    const target = value && Number(value.dataset.count);
    if (!value || !target || reduced) return;

    const suffix = value.dataset.suffix || '';
    const duration = 900;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      value.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }

    value.textContent = '0' + suffix;
    requestAnimationFrame(step);
  }

  if (!('IntersectionObserver' in window)) {
    stats.forEach((stat) => stat.classList.add('counted'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        window.setTimeout(() => count(entry.target), i * 120);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.35, rootMargin: '0px 0px -10% 0px' }
  );

  stats.forEach((stat) => observer.observe(stat));
})();

/* Carrossel de destaques */
(function () {
  const carousel = document.querySelector('.carousel');
  const track = document.querySelector('.carousel-track');
  if (!carousel || !track) return;

  const slides = Array.from(track.children);
  const dotsWrap = document.querySelector('.carousel-dots');
  const prev = document.querySelector('.carousel-prev');
  const next = document.querySelector('.carousel-next');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let index = 0;
  let timer = null;

  const dots = slides.map((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Destaque ${i + 1}`);
    dot.addEventListener('click', () => {
      goTo(i);
      restart();
    });
    if (dotsWrap) dotsWrap.appendChild(dot);
    return dot;
  });

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((slide, n) => {
      slide.setAttribute('aria-hidden', String(n !== index));
      slide.querySelectorAll('a').forEach((a) => {
        if (n === index) a.removeAttribute('tabindex');
        else a.setAttribute('tabindex', '-1');
      });
    });
    dots.forEach((dot, n) => dot.setAttribute('aria-selected', String(n === index)));
  }

  function stop() {
    if (timer) window.clearInterval(timer);
    timer = null;
  }

  function restart() {
    stop();
    if (reduced || slides.length < 2) return;
    timer = window.setInterval(() => goTo(index + 1), 6500);
  }

  if (prev) prev.addEventListener('click', () => { goTo(index - 1); restart(); });
  if (next) next.addEventListener('click', () => { goTo(index + 1); restart(); });

  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', restart);
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('focusout', restart);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : restart()));

  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') { goTo(index + 1); restart(); }
    if (event.key === 'ArrowLeft') { goTo(index - 1); restart(); }
  });

  /* Arrastar com o dedo ou o rato */
  let startX = null;
  carousel.addEventListener('pointerdown', (event) => {
    startX = event.clientX;
    stop();
  });
  carousel.addEventListener('pointerup', (event) => {
    if (startX === null) return;
    const delta = event.clientX - startX;
    if (Math.abs(delta) > 45) goTo(index + (delta < 0 ? 1 : -1));
    startX = null;
    restart();
  });
  carousel.addEventListener('pointercancel', () => { startX = null; restart(); });

  goTo(0);
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
