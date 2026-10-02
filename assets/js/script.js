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
  menu.querySelectorAll('.menu-item.open').forEach((item) => item.classList.remove('open'));
  menu.querySelectorAll('.submenu-toggle').forEach((toggle) => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', toggle.getAttribute('aria-label').replace('Fechar', 'Abrir'));
  });
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

  menu.querySelectorAll('.submenu-toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const item = toggle.closest('.menu-item');
      const aberto = item.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(aberto));
      toggle.setAttribute('aria-label', `${aberto ? 'Fechar' : 'Abrir'} submenu ${item.querySelector('a').textContent.trim()}`);
    });
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

/* Destaques: rotação automática, setas e indicadores.
   Os destaques com imagem ficam o tempo de TEMPO_SLIDE; os que têm vídeo
   ficam até o vídeo acabar. */
(function () {
  const carousel = document.querySelector('.highlights .carousel');
  if (!carousel) return;

  const TEMPO_SLIDE = 14000;

  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(carousel.querySelectorAll('.slide'));
  const previous = document.querySelector('.highlights .carousel-prev');
  const next = document.querySelector('.highlights .carousel-next');
  const dots = document.querySelector('.highlights .carousel-dots');
  if (!track || slides.length < 2) return;

  let current = 0;
  let timer = null;
  let rodando = false;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const videos = slides.map((slide) => slide.querySelector('video'));

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

  function duracaoAtual() {
    const video = videos[current];
    if (video && isFinite(video.duration) && video.duration > 0) return video.duration * 1000;
    return TEMPO_SLIDE;
  }

  function atualizarBarra() {
    if (!dots) return;
    Array.from(dots.children).forEach((dot, position) => {
      dot.style.setProperty('--duracao', (position === current ? duracaoAtual() : TEMPO_SLIDE) + 'ms');
      dot.classList.remove('sem-animacao');
      void dot.offsetWidth;
      if (!rodando) dot.classList.add('sem-animacao');
    });
  }

  function show(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    slides.forEach((slide, position) => {
      slide.setAttribute('aria-hidden', String(position !== current));
      slide.querySelectorAll('a, button').forEach((alvo) => {
        if (position === current) alvo.removeAttribute('tabindex');
        else alvo.setAttribute('tabindex', '-1');
      });
    });
    /* o vídeo só corre no destaque visível, sempre desde o início */
    videos.forEach((video, position) => {
      if (!video) return;
      if (position === current) {
        video.currentTime = 0;
        if (!reducedMotion) {
          const tocar = video.play();
          if (tocar && tocar.catch) tocar.catch(() => {});
        }
      } else {
        video.pause();
      }
    });
    if (dots) {
      Array.from(dots.children).forEach((dot, position) => {
        dot.setAttribute('aria-selected', String(position === current));
      });
      atualizarBarra();
    }
  }

  function parar() {
    window.clearTimeout(timer);
    timer = null;
    rodando = false;
    if (dots) Array.from(dots.children).forEach((dot) => dot.classList.add('sem-animacao'));
  }

  function restart() {
    window.clearTimeout(timer);
    if (reducedMotion) return parar();
    rodando = true;
    atualizarBarra();
    /* destaque com vídeo: avança quando o vídeo acaba (evento "ended") */
    if (videos[current]) return;
    timer = window.setTimeout(() => { show(current + 1); restart(); }, TEMPO_SLIDE);
  }

  videos.forEach((video, position) => {
    if (!video) return;
    video.addEventListener('loadedmetadata', () => { if (position === current && rodando) atualizarBarra(); });
    video.addEventListener('ended', () => {
      if (position !== current || !rodando) return;
      show(current + 1);
      restart();
    });
    const botaoSom = video.parentElement.querySelector('.slide-som');
    if (botaoSom) {
      botaoSom.addEventListener('click', () => {
        video.muted = !video.muted;
        botaoSom.textContent = video.muted ? 'Ativar som' : 'Desativar som';
        botaoSom.setAttribute('aria-pressed', String(!video.muted));
        if (video.paused) {
          const tocar = video.play();
          if (tocar && tocar.catch) tocar.catch(() => {});
        }
      });
    }
  });

  if (previous) previous.addEventListener('click', () => { show(current - 1); restart(); });
  if (next) next.addEventListener('click', () => { show(current + 1); restart(); });
  /* o rato por cima pára só os destaques com imagem; o vídeo segue a tocar */
  carousel.addEventListener('mouseenter', () => { if (!videos[current]) parar(); });
  carousel.addEventListener('mouseleave', () => { if (!videos[current]) restart(); });
  carousel.addEventListener('focusin', () => { if (!videos[current]) parar(); });
  carousel.addEventListener('focusout', () => { if (!videos[current]) restart(); });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      parar();
      const video = videos[current];
      if (video) video.pause();
    } else {
      const video = videos[current];
      if (video && !reducedMotion) {
        const tocar = video.play();
        if (tocar && tocar.catch) tocar.catch(() => {});
      }
      restart();
    }
  });

  /* Arrastar com o dedo (não conta cliques em botões, como o do som) */
  let inicioX = null;
  carousel.addEventListener('pointerdown', (evento) => {
    if (evento.target.closest('button, a')) return;
    inicioX = evento.clientX;
  });
  carousel.addEventListener('pointerup', (evento) => {
    if (inicioX === null) return;
    const delta = evento.clientX - inicioX;
    if (Math.abs(delta) > 45) {
      show(current + (delta < 0 ? 1 : -1));
      restart();
    }
    inicioX = null;
  });
  carousel.addEventListener('pointercancel', () => { inicioX = null; });

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

/* Monograma do fundo: desliza devagar enquanto se faz scroll pelo topo. */
(function () {
  const marca = document.querySelector('.hero-marca');
  const topo = document.querySelector('.hero');
  if (!marca || !topo) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let pedido = null;

  function mover() {
    pedido = null;
    const r = topo.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight) return;
    const andamento = Math.min(Math.max(-r.top / Math.max(r.height, 1), 0), 1);
    marca.style.transform =
      'translateY(calc(-50% + ' + (andamento * 70).toFixed(1) + 'px)) translateX(' +
      (andamento * -46).toFixed(1) + 'px)';
  }

  window.addEventListener(
    'scroll',
    function () {
      if (pedido === null) pedido = window.requestAnimationFrame(mover);
    },
    { passive: true }
  );
  mover();
})();
