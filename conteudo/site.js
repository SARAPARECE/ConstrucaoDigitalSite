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
    { texto: 'Programas', href: 'index.html#programas' },
    {
      texto: 'Especialização',
      href: 'index.html#especializacao',
      sub: [
        { texto: 'Modelação BIM (Revit / ArchiCAD)', href: 'curso-modelacao.html' },
        { texto: 'Candidatura', href: 'candidatura.html' }
      ]
    },
    { texto: 'Notícias', href: 'index.html#noticias' },
    { texto: 'Formadores', href: 'index.html#formadores' },
    {
      texto: 'Recursos',
      href: 'recursos.html',
      sub: [
        { texto: 'Fórum & Ideias', href: 'forum.html' },
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
      'Modelação BIM (Revit ou ArchiCAD)',
      'BIM para Coordenação',
      'Automação e IA',
      'OpenBIM e Interoperabilidade',
      'Outro assunto'
    ]
  },

  /* Logótipos das instituições, no fim da página inicial */
  instituicoes: [
    {
      nome: 'Iscte-Sintra',
      logo: 'https://iscte-iul.pt/assets/assets/logos/svg/iscte-sintra_en_horizontal_positive.svg',
      link: 'https://iscte-iul.pt/school-applied-digital-technologies'
    },
    {
      nome: 'Iscte-Meta Digital',
      logo: 'https://isctemetadigital.pt/wp-content/uploads/2024/02/rgb_meta_digital_regular_positive.svg',
      link: 'https://isctemetadigital.pt/'
    }
  ],

  /* Números da página inicial */
  numeros: [
    { valor: '2', contar: 2, legenda: 'Cursos de ensino superior' },
    { valor: '3', contar: 3, legenda: 'Cursos de especialização' },
    { valor: '100%', contar: 100, sufixo: '%', legenda: 'Foco em competências digitais' },
    { valor: 'AECO', legenda: 'Setor em transformação' }
  ]
};
