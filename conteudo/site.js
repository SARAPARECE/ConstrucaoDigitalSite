/* ===========================================================
   Definições gerais do site: menu, contactos e rodapé.
   Edita aqui e a alteração aparece em todas as páginas.
   =========================================================== */

window.CONTEUDO = window.CONTEUDO || {};

window.CONTEUDO.site = {
  nome: 'Comunidade de Construção Digital',
  etiqueta: 'Comunidade',
  email: 'geral@construcaodigital.com',
  locais: 'Sintra · Lisboa',

  /* Menu principal. Para acrescentar uma página, junta uma linha aqui.
     Uma entrada com "sub" abre a lista ao passar o rato. */
  menu: [
    {
      texto: 'Cursos',
      href: 'index.html#especializacao',
      sub: [
        { texto: 'Modelação BIM: Revit', href: 'curso-revit.html' },
        { texto: 'Modelação BIM: Archicad', href: 'curso-archicad.html' },
        { texto: 'BIM para Obra', href: 'curso-bim-obra.html' },
        { texto: 'Software para Construção', href: 'curso-software-construcao.html' },
        { texto: 'Avaliação do Ciclo de Vida com BIM', href: 'curso-ciclo-vida-bim.html' }
      ]
    },
    {
      texto: 'Ensino superior',
      href: 'index.html#programas',
      sub: [
        { texto: 'Licenciatura', href: 'index.html#licenciatura' },
        { texto: 'Mestrado e pós-graduação', href: 'index.html#mestrado' }
      ]
    },
    { texto: 'Notícias', href: 'index.html#noticias' },
    { texto: 'Formadores', href: 'index.html#formadores' },
    {
      texto: 'Recursos',
      href: 'recursos.html',
      sub: [
        { texto: 'Trabalhos de antigos alunos', href: 'trabalhos.html' },
        { texto: 'Biblioteca', href: 'biblioteca.html' }
      ]
    },
    { texto: 'Parceiros', href: 'index.html#parceiros' },
    { texto: 'Contacto', href: 'index.html#contacto', destaque: true }
  ],

  rodape: {
    descricao:
      'Comunidade que liga academia, formação e indústria na transformação digital do setor AECO.',
    ligacoes: [
      { texto: 'Iscte', href: 'https://iscte-iul.pt/', externo: true },
      { texto: 'Iscte-Sintra', href: 'https://iscte-iul.pt/school-applied-digital-technologies', externo: true },
      { texto: 'Iscte-Meta Digital', href: 'https://isctemetadigital.pt/', externo: true }
    ]
  },

  /* Formulário de candidatura e contacto.
     Sem "endpoint" preenchido, o formulário abre o programa de email do
     visitante já com tudo escrito. Para receber as respostas diretamente na
     caixa de correio, cria um formulário gratuito em formspree.io ou
     formsubmit.co e cola aqui o endereço que te derem. */
  formulario: {
    destino: 'geral@construcaodigital.com',
    endpoint: '',
    cursos: [
      'Modelação BIM: Revit',
      'Modelação BIM: Archicad',
      'BIM para Obra',
      'Software para Construção',
      'Avaliação do Ciclo de Vida com BIM',
      'Outro assunto'
    ]
  },

  /* Números da página inicial */
  numeros: [
    { valor: '2', contar: 2, legenda: 'Cursos de ensino superior' },
    { valor: '5', contar: 5, legenda: 'Cursos de especialização' },
    { valor: '100%', contar: 100, sufixo: '%', legenda: 'Foco em competências digitais' },
    { valor: 'AECO', legenda: 'Setor em transformação' }
  ]
};
