/* Programas académicos e cursos de especialização da página inicial. */

window.CONTEUDO = window.CONTEUDO || {};

window.CONTEUDO.programas = [
  {
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
    tag: 'Mestrado / Pós-graduação',
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
    imagem: 'assets/img/curso-coordenacao.svg',
    titulo: 'BIM para Coordenação',
    texto: 'Coordenação multidisciplinar, clash detection e gestão da qualidade da informação.',
    etiqueta: 'Em preparação',
    link: 'candidatura.html?curso=BIM%20para%20Coordena%C3%A7%C3%A3o',
    linkTexto: 'Estou interessado'
  },
  {
    imagem: 'assets/img/curso-automacao.svg',
    titulo: 'Automação e IA',
    texto: 'Integração de dados, análise preditiva e melhoria de processos em obra.',
    etiqueta: 'Em preparação',
    link: 'candidatura.html?curso=Automa%C3%A7%C3%A3o%20e%20IA',
    linkTexto: 'Estou interessado'
  },
  {
    imagem: 'assets/img/curso-openbim.svg',
    titulo: 'OpenBIM e Interoperabilidade',
    texto: 'Colaboração entre equipas e plataformas com base em normas abertas.',
    etiqueta: 'Em preparação',
    link: 'candidatura.html?curso=OpenBIM%20e%20Interoperabilidade',
    linkTexto: 'Estou interessado'
  }
];
