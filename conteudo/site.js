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
      href: '#especializacao',
      sub: [
        { texto: 'Modelação BIM: Revit', href: 'curso-revit/' },
        { texto: 'Modelação BIM: Archicad', href: 'curso-archicad/' },
        { texto: 'BIM para Obra', href: 'curso-bim-obra/' },
        { texto: 'Software para Construção', href: 'curso-software-construcao/' },
        { texto: 'Avaliação do Ciclo de Vida com BIM', href: 'curso-ciclo-vida-bim/' }
      ]
    },
    {
      texto: 'Formação superior',
      href: '#programas',
      sub: [
        { texto: 'Licenciatura', href: '#licenciatura' },
        { texto: 'Mestrado e pós-graduação', href: '#mestrado' }
      ]
    },
    {
      texto: 'Quem somos',
      href: 'quem-somos/',
      sub: [
        { texto: 'Equipa', href: 'quem-somos/#equipa' },
        { texto: 'Formação e projetos', href: 'quem-somos/#projetos' },
        { texto: 'Investigação', href: 'quem-somos/#investigacao' },
        { texto: 'Parceiros', href: 'quem-somos/#parceiros' }
      ]
    },
    { texto: 'Notícias', href: 'noticias/' },
    {
      texto: 'Recursos',
      href: 'recursos/',
      sub: [
        { texto: 'Trabalhos de antigos alunos', href: 'trabalhos/' },
        { texto: 'Biblioteca', href: 'biblioteca/' }
      ]
    },
    { texto: 'Contacto', href: '#contacto', destaque: true }
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
    /* Para as mensagens chegarem à caixa de correio sem abrir o programa de email,
       o formulário é enviado pelo FormSubmit. A primeira mensagem enviada faz
       chegar um email de ativação a geral@construcaodigital.com: basta clicar no
       link uma vez. Deixando "endpoint" vazio, volta a abrir o email do visitante. */
    destino: 'geral@construcaodigital.com',
    endpoint: 'https://formsubmit.co/geral@construcaodigital.com',
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
    { valor: '2', contar: 2, legenda: 'Cursos de formação superior' },
    { valor: '5', contar: 5, legenda: 'Cursos de especialização' },
    { valor: '100%', contar: 100, sufixo: '%', legenda: 'Foco em competências digitais para a construção' }
  ]
};
