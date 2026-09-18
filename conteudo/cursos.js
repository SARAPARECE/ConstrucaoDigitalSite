/* ===========================================================
   Cursos de especialização com página própria.
   O tronco comum é partilhado pelos dois cursos: editas uma vez
   e muda nos dois. As horas são uma proposta, ajusta à vontade.
   =========================================================== */

window.CONTEUDO = window.CONTEUDO || {};

/* --- Tronco comum, igual nos dois cursos --- */
var TRONCO_COMUM = {
  titulo: 'Tronco comum',
  descricao: 'Base de gestão de informação, igual nos dois cursos, antes da parte de modelação.',
  modulos: [
    {
      titulo: 'Fundamentos BIM',
      carga: '4 h',
      itens: [
        'O que é e o que não é BIM: modelo, informação e processo',
        'Usos BIM ao longo do ciclo de vida do edifício',
        'Papéis na equipa e maturidade digital do setor'
      ]
    },
    {
      titulo: 'Gestão de informação segundo a ISO 19650',
      carga: '8 h',
      itens: [
        'ISO 19650-1: conceitos, princípios e ciclo de entrega da informação',
        'ISO 19650-2: fase de entrega, do concurso à entrega dos ativos',
        'Requisitos de informação: OIR, PIR, AIR e EIR',
        'Nível de informação necessário (LOIN) e critérios de aceitação',
        'Ambiente Comum de Dados (CDE): estados, fluxos e aprovações',
        'Plano de Execução BIM (BEP) e convenções de nomenclatura'
      ]
    },
    {
      titulo: 'openBIM e interoperabilidade',
      carga: '4 h',
      itens: [
        'IFC: estrutura do modelo, entidades e propriedades',
        'Exportação e verificação de modelos IFC',
        'BCF para comunicação de problemas entre equipas'
      ]
    },
    {
      titulo: 'Classificação e organização da informação',
      carga: '4 h',
      itens: [
        'Sistemas de classificação: Uniclass e SECClasS',
        'Parâmetros, quantidades e mapas a partir do modelo',
        'Sustentabilidade: que dados o modelo tem de ter para uma ACV'
      ]
    }
  ]
};

var INFO_BASE = [
  { etiqueta: 'Duração', valor: '40 horas' },
  { etiqueta: 'Formato', valor: 'Presencial no Iscte-Sintra, com apoio online' },
  { etiqueta: 'Destinatários', valor: 'Arquitetura, engenharia, construção e gestão de obra' },
  { etiqueta: 'Pré-requisitos', valor: 'Noções de desenho técnico. Não exige experiência em BIM' }
];

window.CONTEUDO.cursos = {
  /* --- Curso de Revit --- */
  revit: {
    nome: 'Modelação BIM: Revit',
    marca: 'Modelação',
    destaque: 'Revit',
    subtitulo: 'introdução, com base em ISO 19650',
    resumo:
      'Primeiro curso da comunidade. Começa pelo tronco comum de fundamentos BIM e gestão de informação segundo a ISO 19650 e segue para a modelação de um projeto completo em Autodesk Revit, até à entrega em IFC.',
    imagem: 'assets/img/curso-revit.svg',
    info: INFO_BASE,
    comum: TRONCO_COMUM,
    modulos: [
      {
        titulo: 'Arranque e modelação',
        carga: '8 h',
        itens: [
          'Interface, templates e organização do projeto',
          'Níveis, grelhas e elementos construtivos',
          'Paredes, lajes, coberturas, vãos e escadas'
        ]
      },
      {
        titulo: 'Famílias e documentação',
        carga: '8 h',
        itens: [
          'Famílias de sistema e famílias carregáveis',
          'Anotação, tabelas de quantidades e folhas de desenho',
          'Worksets e trabalho colaborativo'
        ]
      },
      {
        titulo: 'Entrega e verificação',
        carga: '4 h',
        itens: [
          'Exportação IFC com mapeamento de propriedades',
          'Verificação do modelo face aos requisitos de informação',
          'Entrega no CDE segundo o BEP definido no tronco comum'
        ]
      }
    ],
    nota:
      'Quem preferir Archicad tem o mesmo percurso no curso de Modelação BIM: Archicad, com o mesmo tronco comum e a mesma exigência de informação.',
    cursoAlternativo: { texto: 'Ver o curso de Archicad', href: 'curso-archicad.html' }
  },

  /* --- Curso de Archicad --- */
  archicad: {
    nome: 'Modelação BIM: Archicad',
    marca: 'Modelação',
    destaque: 'Archicad',
    subtitulo: 'introdução, com base em ISO 19650',
    resumo:
      'O mesmo percurso do curso de Revit, com o tronco comum de fundamentos BIM e ISO 19650, seguido da modelação de um projeto completo em Graphisoft Archicad, até à entrega em IFC.',
    imagem: 'assets/img/curso-archicad.svg',
    info: INFO_BASE,
    comum: TRONCO_COMUM,
    modulos: [
      {
        titulo: 'Arranque e modelação',
        carga: '8 h',
        itens: [
          'Interface, template e estrutura de pisos',
          'Ferramentas construtivas: paredes, lajes, coberturas e vãos',
          'Perfis complexos e elementos personalizados'
        ]
      },
      {
        titulo: 'Biblioteca e documentação',
        carga: '8 h',
        itens: [
          'Objetos de biblioteca e introdução ao GDL',
          'Vistas, layouts e o Publisher',
          'Teamwork e trabalho em equipa'
        ]
      },
      {
        titulo: 'Entrega e verificação',
        carga: '4 h',
        itens: [
          'Translators IFC e controlo do que é exportado',
          'Verificação do modelo face aos requisitos de informação',
          'Entrega no CDE segundo o BEP definido no tronco comum'
        ]
      }
    ],
    nota:
      'Quem preferir Revit tem o mesmo percurso no curso de Modelação BIM: Revit, com o mesmo tronco comum e a mesma exigência de informação.',
    cursoAlternativo: { texto: 'Ver o curso de Revit', href: 'curso-revit.html' }
  }
};
