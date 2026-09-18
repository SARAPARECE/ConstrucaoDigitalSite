/* ===========================================================
   Cursos de especialização com página própria.
   Editar aqui muda a página do curso. As horas e as datas são
   uma proposta: ajusta ao que for decidido.
   =========================================================== */

window.CONTEUDO = window.CONTEUDO || {};

window.CONTEUDO.curso = {
  nome: 'Modelação BIM',
  subtitulo: 'introdução, com percurso Revit ou ArchiCAD',
  resumo:
    'Primeiro curso da comunidade. Começa por um tronco comum de fundamentos BIM e gestão de informação segundo a ISO 19650 e, na segunda metade, divide-se em dois percursos de modelação: Revit ou ArchiCAD.',

  /* Caixa de informação no topo da página */
  info: [
    { etiqueta: 'Duração', valor: '40 horas' },
    { etiqueta: 'Formato', valor: 'Presencial no Iscte-Sintra, com apoio online' },
    { etiqueta: 'Destinatários', valor: 'Arquitetura, engenharia, construção e gestão de obra' },
    { etiqueta: 'Pré-requisitos', valor: 'Noções de desenho técnico. Não exige experiência em BIM' }
  ],

  /* Tronco comum: igual para os dois percursos */
  comum: {
    titulo: 'Tronco comum',
    descricao: 'Base partilhada pelos dois percursos, antes da escolha da ferramenta.',
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
  },

  /* Percursos: a partir daqui cada turma segue a sua ferramenta */
  percursos: [
    {
      nome: 'Percurso Revit',
      etiqueta: 'Autodesk Revit',
      descricao: 'Modelação de um projeto completo em Revit, do arranque à documentação.',
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
      ]
    },
    {
      nome: 'Percurso ArchiCAD',
      etiqueta: 'Graphisoft ArchiCAD',
      descricao: 'Modelação do mesmo projeto em ArchiCAD, com a mesma exigência de informação.',
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
      ]
    }
  ],

  nota:
    'No fim do curso, os dois percursos voltam a juntar-se para comparar os modelos entregues e discutir o que muda, e o que não muda, quando se troca de ferramenta.'
};
