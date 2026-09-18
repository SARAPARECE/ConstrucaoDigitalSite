/* ===========================================================
   Cursos de especialização com página própria.
   Datas, horário e preço estão por definir: muda aqui quando
   estiverem fechados e as páginas atualizam-se sozinhas.
   =========================================================== */

window.CONTEUDO = window.CONTEUDO || {};

/* Módulo transversal, igual nos dois cursos. Editas uma vez, muda nos dois. */
var MODULO_BIM = {
  titulo: 'Conceitos BIM e gestão de informação',
  carga: '4 h',
  etiqueta: 'Comum aos dois cursos',
  itens: [
    'Metodologia BIM: modelo, informação e processo de trabalho',
    'Usos BIM ao longo do ciclo de vida do edifício',
    'ISO 19650: requisitos de informação, LOIN e critérios de aceitação',
    'Ambiente Comum de Dados (CDE), Plano de Execução BIM e nomenclaturas',
    'IFC e openBIM: o que sai do modelo e como se verifica'
  ]
};

/* Informação prática partilhada. */
function infoCurso() {
  return [
    { etiqueta: 'Duração', valor: '32 horas', detalhe: '8 sessões', icone: 'relogio' },
    { etiqueta: 'Regime', valor: 'Pós-laboral', detalhe: 'Presencial no Iscte-Sintra ou online em tempo real', icone: 'local' },
    { etiqueta: 'Datas', valor: 'A definir', detalhe: 'Próxima edição a anunciar', icone: 'calendario', porDefinir: true },
    { etiqueta: 'Horário', valor: 'A definir', detalhe: 'Duas sessões por semana', icone: 'relogio', porDefinir: true },
    { etiqueta: 'Preço', valor: 'A definir', detalhe: 'Com desconto para inscrições antecipadas', icone: 'euro', porDefinir: true },
    { etiqueta: 'Vagas', valor: '18 participantes', detalhe: 'Um computador por pessoa', icone: 'pessoas' },
    { etiqueta: 'Certificado', valor: 'Sim', detalhe: 'Com 80% de presenças', icone: 'certificado' },
    { etiqueta: 'Pré-requisitos', valor: 'Nenhum em BIM', detalhe: 'Noções de desenho técnico', icone: 'nivel' }
  ];
}

function sobreCurso(ferramenta) {
  return [
    {
      titulo: 'Descrição',
      texto:
        'Curso prático de modelação de um edifício completo, das paredes à documentação. Não é só formação em software: cada passo é ligado à realidade construtiva e às regras de organização da informação que a obra e as restantes especialidades exigem.'
    },
    {
      titulo: 'Objetivos',
      texto:
        'No fim do curso, cada participante é capaz de produzir um modelo de arquitetura em ' +
        ferramenta +
        ' com qualidade, organizar a informação segundo a ISO 19650 e entregar o modelo em IFC pronto a ser usado por outras equipas.'
    },
    {
      titulo: 'A quem se destina',
      texto:
        'Profissionais e estudantes de arquitetura, engenharia, construção e gestão de obra que queiram entrar na metodologia BIM. É útil, mas não obrigatório, conhecer um programa de CAD.'
    },
    {
      titulo: 'Metodologia',
      texto:
        'O curso segue um projeto-tipo do início ao fim. Cada tema é demonstrado, experimentado pelo participante e seguido de um momento de dúvidas, com ênfase nas boas práticas de modelação que dão modelos eficientes.'
    }
  ];
}

window.CONTEUDO.cursos = {
  /* --------------------------- REVIT --------------------------- */
  revit: {
    nome: 'Modelação BIM: Revit',
    destaque: 'Revit',
    resumo:
      'Curso prático de introdução à modelação BIM em Autodesk Revit. Em 32 horas, modela-se um edifício completo, da parede à paginação, com a gestão de informação segundo a ISO 19650 como base de trabalho.',
    /* Imagem do curso de Revit do ISTAR. Alternativas:
       desenho axonométrico do edifício:
       https://istar.iscte-iul.pt/cursorevit/wp-content/uploads/sites/2/2018/07/Fundo.png
       gráfico próprio: assets/img/curso-revit.svg
       Para não depender do site do ISTAR, guarda o ficheiro em assets/img e troca o caminho. */
    imagem: 'https://istar.iscte-iul.pt/cursorevit/wp-content/uploads/sites/2/2018/07/ISCTERevit.png',
    imagemAjuste: 'contain',
    info: infoCurso(),
    sobre: sobreCurso('Revit'),
    modulos: [
      MODULO_BIM,
      {
        titulo: 'Arranque e elementos base',
        carga: '7 h',
        itens: [
          'Introdução à plataforma do Revit e conceitos BIM',
          'Modelação de paredes',
          'Modelação de pavimentos',
          'Vãos: portas e janelas',
          'Criação de níveis'
        ]
      },
      {
        titulo: 'Envolvente e circulações',
        carga: '7 h',
        itens: [
          'Curtain walls',
          'Tetos',
          'Coberturas',
          'Escadas, guardas e rampas',
          'Elevadores e coretes'
        ]
      },
      {
        titulo: 'Massas, famílias e informação',
        carga: '7 h',
        itens: [
          'Massas conceptuais',
          'Renderização',
          'Famílias e tipos',
          'Modelação de terrenos',
          'Anotações, áreas e rooms'
        ]
      },
      {
        titulo: 'Estrutura, documentação e entrega',
        carga: '7 h',
        itens: [
          'Eixos estruturais',
          'Pilares, vigas e lajes',
          'Gestão gráfica: cotagem e paginação',
          'Exportação IFC e verificação do modelo entregue'
        ]
      }
    ],
    nota:
      'Prefere trabalhar em Archicad? O curso de Modelação BIM: Archicad tem a mesma estrutura, a mesma carga horária e o mesmo módulo de conceitos BIM e ISO 19650.',
    cursoAlternativo: { texto: 'Ver o curso de Archicad', href: 'curso-archicad.html' }
  },

  /* -------------------------- ARCHICAD ------------------------- */
  archicad: {
    nome: 'Modelação BIM: Archicad',
    destaque: 'Archicad',
    resumo:
      'Curso prático de introdução à modelação BIM em Graphisoft Archicad. A mesma estrutura do curso de Revit, com o mesmo edifício modelado do início ao fim e a mesma exigência de informação.',
    imagem: 'assets/img/curso-archicad.svg',
    info: infoCurso(),
    sobre: sobreCurso('Archicad'),
    modulos: [
      MODULO_BIM,
      {
        titulo: 'Arranque e elementos base',
        carga: '7 h',
        itens: [
          'Introdução à interface do Archicad e conceitos BIM',
          'Modelação de paredes',
          'Modelação de lajes e pavimentos',
          'Vãos: portas e janelas',
          'Pisos, elevações e cotas de referência'
        ]
      },
      {
        titulo: 'Envolvente e circulações',
        carga: '7 h',
        itens: [
          'Muros-cortina (Curtain Wall)',
          'Tetos falsos e acabamentos',
          'Coberturas e RoofMaker',
          'Escadas, guardas e rampas',
          'Elevadores e coretes'
        ]
      },
      {
        titulo: 'Massas, biblioteca e informação',
        carga: '7 h',
        itens: [
          'Morph e Shell para volumetria conceptual',
          'Renderização e materiais de superfície',
          'Objetos de biblioteca e introdução ao GDL',
          'Modelação de terrenos com Mesh',
          'Anotações, zonas e mapas de áreas'
        ]
      },
      {
        titulo: 'Estrutura, documentação e entrega',
        carga: '7 h',
        itens: [
          'Grelhas e eixos estruturais',
          'Pilares, vigas e lajes',
          'Layouts, cotagem e Publisher',
          'Exportação IFC com translators e verificação do modelo entregue'
        ]
      }
    ],
    nota:
      'Prefere trabalhar em Revit? O curso de Modelação BIM: Revit tem a mesma estrutura, a mesma carga horária e o mesmo módulo de conceitos BIM e ISO 19650.',
    cursoAlternativo: { texto: 'Ver o curso de Revit', href: 'curso-revit.html' }
  }
};
