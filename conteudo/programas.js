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

  { curso: 'obra' },
  { curso: 'software' },
  { curso: 'cicloVida' }
];
