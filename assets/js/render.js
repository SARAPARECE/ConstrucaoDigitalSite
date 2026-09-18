/* ===========================================================
   Constrói o cabeçalho, o rodapé e as listas a partir dos
   ficheiros da pasta conteudo/. Não é preciso mexer aqui para
   acrescentar uma notícia, um trabalho ou uma página.
   =========================================================== */

(function () {
  const dados = window.CONTEUDO || {};
  const site = dados.site || {};

  function esc(texto) {
    return String(texto == null ? '' : texto)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  const paginaAtual = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  /* Páginas de curso indicam qual é com <main data-curso="revit"> */
  const elementoCurso = document.querySelector('[data-curso]');
  if (elementoCurso && dados.cursos) {
    dados.curso = dados.cursos[elementoCurso.dataset.curso] || dados.curso;
  }

  function ehAtual(href) {
    /* Só marca como página atual as ligações a páginas, não as âncoras
       dentro da mesma página: essas ficam a cargo do script.js. */
    if (!href || href.indexOf('#') !== -1) return false;
    return href.toLowerCase() === paginaAtual;
  }

  function externo(href) {
    return /^https?:/i.test(href || '');
  }

  function atributosLink(href) {
    return externo(href) ? ' target="_blank" rel="noreferrer"' : '';
  }

  /* ---------- Cabeçalho ---------- */

  function cabecalho() {
    const itens = (site.menu || [])
      .map((item) => {
        const ativo = ehAtual(item.href) ? ' active' : '';
        if (item.sub && item.sub.length) {
          const subAtivo = item.sub.some((s) => ehAtual(s.href));
          const sub = item.sub
            .map((s) => `<a href="${esc(s.href)}"${ehAtual(s.href) ? ' class="active"' : ''}>${esc(s.texto)}</a>`)
            .join('');
          return `<div class="menu-item has-sub">
              <a class="${ativo || subAtivo ? 'active' : ''}" href="${esc(item.href)}" aria-haspopup="true" aria-expanded="false">${esc(item.texto)} <i class="ico ico-chevron" aria-hidden="true"></i></a>
              <div class="submenu">${sub}</div>
            </div>`;
        }
        if (item.destaque) {
          return `<a class="menu-cta" href="${esc(item.href)}">${esc(item.texto)}</a>`;
        }
        return `<a class="${ativo}" href="${esc(item.href)}">${esc(item.texto)}</a>`;
      })
      .join('\n');

    return `<div class="container nav">
        <a class="brand" href="index.html" aria-label="${esc(site.nome)}, início">
          <img class="brand-logo logo-light" src="assets/logos/construcao-digital_logo.svg" alt="" width="1665" height="363" />
          <img class="brand-logo logo-dark" src="assets/logos/construcao-digital_logo_negativo_transparente.svg" alt="" width="1665" height="363" />
          <span class="brand-divider" aria-hidden="true"></span>
          <span class="brand-label">${esc(site.etiqueta || '')}</span>
        </a>

        <nav class="menu" id="mainMenu" aria-label="Navegação principal">${itens}</nav>

        <div class="nav-tools">
          <button class="icon-btn theme-toggle" type="button" aria-label="Mudar para modo escuro" title="Mudar tema">
            <svg class="icon-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" /></svg>
            <svg class="icon-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
          </button>
          <button class="icon-btn menu-toggle" type="button" aria-expanded="false" aria-controls="mainMenu" aria-label="Abrir menu">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </div>`;
  }

  /* ---------- Rodapé ---------- */

  function rodape() {
    const navegacao = (site.menu || [])
      .filter((item) => !item.destaque)
      .map((item) => {
        const principal = `<a href="${esc(item.href)}">${esc(item.texto)}</a>`;
        const subs = (item.sub || []).map((s) => `<a href="${esc(s.href)}">${esc(s.texto)}</a>`).join('');
        return principal + subs;
      })
      .join('');

    const ligacoes = (site.rodape && site.rodape.ligacoes ? site.rodape.ligacoes : [])
      .map((l) => `<a href="${esc(l.href)}"${atributosLink(l.href)}>${esc(l.texto)} <i class="ico ico-ext" aria-hidden="true"></i></a>`)
      .join('');

    return `<div class="container footer-grid">
        <div class="footer-brand">
          <img src="assets/logos/construcao-digital_logo_negativo_transparente.svg" alt="${esc(site.nome)}" width="1665" height="363" loading="lazy" />
          <p>${esc(site.rodape && site.rodape.descricao)}</p>
        </div>
        <nav aria-label="Navegação do rodapé">
          <h3>Navegação</h3>
          ${navegacao}
        </nav>
        <div>
          <h3>Contacto</h3>
          <a href="mailto:${esc(site.email)}">${esc(site.email)}</a>
          <span>${esc(site.locais)}</span>
          <span>Comunidade online</span>
        </div>
        <nav aria-label="Ligações externas">
          <h3>Iscte</h3>
          ${ligacoes}
        </nav>
      </div>
      <div class="container footer-bottom">
        <small>© <span id="year"></span> ${esc(site.nome)}</small>
        <a href="#topo">Voltar ao topo <i class="ico ico-up" aria-hidden="true"></i></a>
      </div>`;
  }

  /* ---------- Listas ---------- */

  function botaoLink(item, classe) {
    if (!item.link) return '';
    const icone = externo(item.link) ? 'ico-ext' : 'ico-arrow';
    const texto = item.linkTexto || 'Saber mais';
    return `<a class="${classe}" href="${esc(item.link)}"${atributosLink(item.link)}>${esc(texto)} <i class="ico ${icone}" aria-hidden="true"></i></a>`;
  }

  const construtores = {
    numeros: (lista) =>
      lista
        .map(
          (n) => `<div class="stat">
            <strong${n.contar ? ` data-count="${esc(n.contar)}"` : ''}${n.sufixo ? ` data-suffix="${esc(n.sufixo)}"` : ''}>${esc(n.valor)}</strong>
            <span>${esc(n.legenda)}</span>
          </div>`
        )
        .join(''),

    destaques: (lista) =>
      `<div class="carousel" aria-roledescription="carrossel" aria-label="Destaques">
        <ul class="carousel-track">
          ${lista
            .map(
              (d, i) => `<li class="slide" role="group" aria-roledescription="slide" aria-label="${i + 1} de ${lista.length}">
              <article class="slide-inner">
                <div class="slide-media"><img src="${esc(d.imagem)}" alt="" loading="lazy" /></div>
                <div class="slide-body">
                  <span class="tag">${esc(d.tag)}</span>
                  <h3>${esc(d.titulo)}</h3>
                  <p>${esc(d.texto)}</p>
                  ${botaoLink(d, 'link-arrow')}
                </div>
              </article>
            </li>`
            )
            .join('')}
        </ul>
      </div>
      <div class="carousel-dots" role="tablist" aria-label="Escolher destaque"></div>`,

    programas: (lista) =>
      lista
        .map(
          (p) => `<article class="program reveal">
            <div class="program-meta">
              <span class="tag">${esc(p.tag)}</span>
              <span class="code">${esc(p.codigo)}</span>
            </div>
            <h3>${esc(p.titulo)}</h3>
            <p>${esc(p.texto)}</p>
            <ul class="checks">${(p.pontos || []).map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
            ${botaoLink({ link: p.link, linkTexto: 'Ver curso oficial' }, 'btn btn-dark')}
          </article>`
        )
        .join(''),

    especializacao: (lista) =>
      lista
        .map(
          (c, i) => `<article class="card reveal">
            ${c.imagem ? `<div class="card-media"><img src="${esc(c.imagem)}" alt="" loading="lazy" /></div>` : ''}
            <span class="card-num">${String(i + 1).padStart(2, '0')}${c.etiqueta ? `<em class="card-tag">${esc(c.etiqueta)}</em>` : ''}</span>
            <h3>${esc(c.titulo)}</h3>
            <p>${esc(c.texto)}</p>
            ${botaoLink(c, 'link-arrow')}
          </article>`
        )
        .join(''),

    'curso-info': (lista) =>
      lista
        .map(
          (i) => `<div class="curso-info-item">
            <span>${esc(i.etiqueta)}</span>
            <strong>${esc(i.valor)}</strong>
          </div>`
        )
        .join(''),

    'curso-comum': (comum) =>
      `<div class="modulos">${modulos(comum.modulos)}</div>`,

    'curso-modulos': (lista) => `<div class="modulos">${modulos(lista)}</div>`,

    'curso-percursos': (lista) =>
      lista
        .map(
          (p) => `<article class="percurso reveal">
            <span class="tag">${esc(p.etiqueta)}</span>
            <h3>${esc(p.nome)}</h3>
            <p>${esc(p.descricao)}</p>
            <div class="modulos">${modulos(p.modulos)}</div>
          </article>`
        )
        .join(''),

    cartoes: (lista) =>
      lista
        .map(
          (n) => `<article class="news-card reveal">
            <div class="news-media"><img src="${esc(n.imagem)}" alt="" loading="lazy" /></div>
            <div class="news-body">
              <div class="news-meta"><span class="tag">${esc(n.tag)}</span><time datetime="${esc(n.dataISO)}">${esc(n.data)}</time></div>
              <h3>${esc(n.titulo)}</h3>
              <p>${esc(n.texto)}</p>
              ${n.link ? botaoLink({ link: n.link, linkTexto: n.linkTexto || 'Ler mais' }, 'link-arrow') : ''}
            </div>
          </article>`
        )
        .join(''),

    formadores: (lista) =>
      lista
        .map(
          (f) => `<article class="teacher reveal">
            <img class="teacher-photo" src="${esc(f.foto)}" alt="${esc(f.nome)}" width="400" height="400" loading="lazy" />
            <div class="teacher-body">
              <h3>${esc(f.nome)}</h3>
              ${f.cargo ? `<p class="teacher-role">${esc(f.cargo)}</p>` : ''}
              ${f.texto ? `<p>${esc(f.texto)}</p>` : ''}
              ${f.linkedin ? `<a class="link-arrow" href="${esc(f.linkedin)}" target="_blank" rel="noreferrer">LinkedIn <i class="ico ico-ext" aria-hidden="true"></i></a>` : ''}
            </div>
          </article>`
        )
        .join(''),

    logotipos: (lista) =>
      lista
        .map(
          (p) => `<a class="logo-link" href="${esc(p.link)}" target="_blank" rel="noreferrer" aria-label="${esc(p.nome)} (abre noutro separador)">
            <img src="${esc(p.logo)}" alt="${esc(p.nome)}" loading="lazy" />
          </a>`
        )
        .join(''),

    biblioteca: (lista) =>
      lista
        .map(
          (r, i) => `<article class="card reveal">
            <span class="card-num">${String(i + 1).padStart(2, '0')}</span>
            <h3>${esc(r.titulo)}</h3>
            <p>${esc(r.texto)}</p>
            ${botaoLink(r, 'link-arrow')}
          </article>`
        )
        .join(''),

    pastilhas: (lista) => lista.map((t) => `<li class="pill">${esc(t)}</li>`).join(''),

    passos: (lista) => lista.map((p) => `<li>${esc(p)}</li>`).join('')
  };

  function modulos(lista) {
    return (lista || [])
      .map(
        (m) => `<section class="modulo">
          <header>
            <h4>${esc(m.titulo)}</h4>
            ${m.carga ? `<span class="carga">${esc(m.carga)}</span>` : ''}
          </header>
          <ul>${(m.itens || []).map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
        </section>`
      )
      .join('');
  }

  function formulario(assunto) {
    const config = site.formulario || {};
    const opcoes = (config.cursos || [])
      .map((c) => `<option value="${esc(c)}">${esc(c)}</option>`)
      .join('');

    return `<form class="formulario" data-destino="${esc(config.destino || site.email)}" data-endpoint="${esc(config.endpoint || '')}"${config.endpoint ? ` action="${esc(config.endpoint)}" method="post"` : ''}>
        <input type="hidden" name="_subject" value="${esc(assunto || 'Contacto pelo site')}" />
        <div class="campo">
          <label for="f-nome">Nome</label>
          <input id="f-nome" name="nome" type="text" required autocomplete="name" />
        </div>
        <div class="campo">
          <label for="f-email">Email</label>
          <input id="f-email" name="email" type="email" required autocomplete="email" />
        </div>
        <div class="campo">
          <label for="f-telefone">Telefone <span class="opcional">(opcional)</span></label>
          <input id="f-telefone" name="telefone" type="tel" autocomplete="tel" />
        </div>
        <div class="campo">
          <label for="f-curso">Curso</label>
          <select id="f-curso" name="curso">${opcoes}</select>
        </div>
        <div class="campo">
          <label for="f-percurso">Percurso <span class="opcional">(só para Modelação BIM)</span></label>
          <select id="f-percurso" name="percurso">
            <option value="Ainda não sei">Ainda não sei</option>
            <option value="Revit">Revit</option>
            <option value="ArchiCAD">ArchiCAD</option>
          </select>
        </div>
        <div class="campo campo-largo">
          <label for="f-mensagem">Mensagem <span class="opcional">(opcional)</span></label>
          <textarea id="f-mensagem" name="mensagem" rows="4" placeholder="Conta-nos o teu percurso ou o que procuras."></textarea>
        </div>
        <div class="campo campo-largo consentimento">
          <label><input type="checkbox" name="consentimento" required /> Autorizo o contacto por email sobre esta candidatura.</label>
        </div>
        <div class="campo campo-largo">
          <button class="btn btn-primary btn-lg" type="submit">Enviar candidatura <i class="ico ico-arrow" aria-hidden="true"></i></button>
          <p class="form-nota" role="status"></p>
        </div>
      </form>`;
  }

  /* ---------- Aplicar ---------- */

  const alvoCabecalho = document.querySelector('[data-componente="cabecalho"]');
  if (alvoCabecalho) alvoCabecalho.innerHTML = cabecalho();

  const alvoRodape = document.querySelector('[data-componente="rodape"]');
  if (alvoRodape) alvoRodape.innerHTML = rodape();

  const alvoFormulario = document.querySelector('[data-componente="formulario"]');
  if (alvoFormulario) alvoFormulario.innerHTML = formulario(alvoFormulario.dataset.assunto);

  document.querySelectorAll('[data-lista]').forEach((alvo) => {
    const chave = alvo.dataset.lista;
    const tipo = alvo.dataset.tipo || chave;
    let lista = dados[chave];

    if (chave === 'forum-temas') lista = (dados.forum || {}).temas;
    if (chave === 'forum-passos') lista = (dados.forum || {}).passos;
    if (chave === 'numeros' || chave === 'instituicoes') lista = site[chave];
    if (chave === 'curso-info') lista = (dados.curso || {}).info;
    if (chave === 'curso-comum') lista = (dados.curso || {}).comum;
    if (chave === 'curso-modulos') lista = (dados.curso || {}).modulos;
    if (chave === 'curso-percursos') lista = (dados.curso || {}).percursos;

    const construtor = construtores[tipo] || construtores[chave];
    if (!lista || !construtor) return;
    alvo.innerHTML = construtor(lista);
  });

  document.querySelectorAll('[data-imagem]').forEach((alvo) => {
    const caminho = alvo.dataset.imagem.split('.');
    let valor = dados;
    caminho.forEach((parte) => (valor = valor && valor[parte]));
    if (typeof valor === 'string') alvo.setAttribute('src', valor);
  });

  document.querySelectorAll('[data-ligacao]').forEach((alvo) => {
    const caminho = alvo.dataset.ligacao.split('.');
    let valor = dados;
    caminho.forEach((parte) => (valor = valor && valor[parte]));
    if (valor && valor.href) {
      alvo.setAttribute('href', valor.href);
      alvo.innerHTML = esc(valor.texto) + ' <i class="ico ico-arrow" aria-hidden="true"></i>';
    }
  });

  document.querySelectorAll('[data-texto]').forEach((alvo) => {
    const caminho = alvo.dataset.texto.split('.');
    let valor = dados;
    caminho.forEach((parte) => (valor = valor && valor[parte]));
    if (typeof valor === 'string') alvo.textContent = valor;
  });
})();
