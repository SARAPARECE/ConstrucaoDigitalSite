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
  {
    imagem: 'assets/img/curso-revit.svg',
    titulo: 'Modelação BIM: Revit',
    texto: 'Fundamentos BIM e ISO 19650 no tronco comum, seguidos de modelação completa em Revit.',
    etiqueta: 'Inscrições abertas',
    link: 'curso-revit.html',
    linkTexto: 'Ver o programa'
  },
  {
    imagem: 'assets/img/curso-archicad.svg',
    titulo: 'Modelação BIM: Archicad',
    texto: 'O mesmo percurso, com a modelação feita em Archicad e entrega em IFC.',
    etiqueta: 'Inscrições abertas',
    link: 'curso-archicad.html',
    linkTexto: 'Ver o programa'
  },
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
