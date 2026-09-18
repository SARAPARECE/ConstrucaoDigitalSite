/* Programas académicos e cursos de especialização da página inicial. */

window.CONTEUDO = window.CONTEUDO || {};

window.CONTEUDO.programas = [
  {
    ancora: 'licenciatura',
    tag: 'Licenciatura',
    codigo: 'Curso 0429',
    titulo: 'Licenciatura em Tecnologias Digitais, Edifícios e Construção Sustentável',
    texto:
      'Formação interdisciplinar que integra tecnologia, construção e sustentabilidade para transformar a forma de projetar, construir e gerir cidades e infraestruturas.',
    pontos: [
      'BIM, programação, IA e automação',
      'Modelação 3D e captura da realidade',
      'Projetos práticos multidisciplinares'
    ],
    link: 'https://iscte-iul.pt/cursos/curso/0429'
  },
  {
    ancora: 'mestrado',
    tag: 'Mestrado / Pós-graduação',
    estado: 'Inscrições abertas',
    codigo: 'Curso 0536',
    titulo: 'Mestrado em Construção Digital',
    texto:
      'Percurso avançado para liderar a transformação digital no setor da construção com visão técnica, estratégica e de gestão.',
    pontos: [
      'Interoperabilidade e OpenBIM',
      'Scripting e design paramétrico',
      'Desenvolvimento de software para construção'
    ],
    link: 'https://iscte-iul.pt/cursos/curso/0536'
  }
];

window.CONTEUDO.especializacao = [
  /* Cursos com página própria: basta referir a chave em conteudo/cursos.js.
     O título, o texto, a imagem e o link vêm de lá, por isso muda-se num sítio só. */
  { curso: 'revit' },
  { curso: 'archicad' },

  /* Cursos ainda sem página: texto e imagem aqui mesmo. */
  {
    imagem: 'assets/img/curso-bim-obra.jpg',
    titulo: 'BIM para Obra',
    texto: 'Planeamento, acompanhamento de obra, controlo de qualidade e gestão de informação BIM no terreno.',
    etiqueta: 'Em breve',
    link: 'candidatura.html?curso=BIM%20para%20Obra',
    linkTexto: 'Estou interessado'
  },
  {
    imagem: 'assets/img/curso-software-construcao.jpg',
    titulo: 'Software para Construção',
    texto: 'Ferramentas digitais para planear, gerir, comunicar e aumentar a produtividade em projetos de construção.',
    etiqueta: 'Em breve',
    link: 'candidatura.html?curso=Software%20para%20Constru%C3%A7%C3%A3o',
    linkTexto: 'Estou interessado'
  },
  {
    imagem: 'assets/img/curso-openbim.svg',
    titulo: 'Avaliação do Ciclo de Vida com BIM',
    texto: 'Integração de LCA + BIM para medir impactes ambientais e apoiar decisões de projeto mais sustentáveis.',
    etiqueta: 'Em breve',
    link: 'candidatura.html?curso=Avalia%C3%A7%C3%A3o%20do%20Ciclo%20de%20Vida%20com%20BIM',
    linkTexto: 'Estou interessado'
  }
];
