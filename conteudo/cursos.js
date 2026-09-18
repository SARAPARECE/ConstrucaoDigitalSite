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
function infoCurso(duracao, sessoes) {
  return [
    { etiqueta: 'Duração', valor: duracao || '32 horas', detalhe: sessoes || '8 sessões', icone: 'relogio' },
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
        'Curso prático de modelação BIM em ' +
        ferramenta +
        ', do arranque do projeto até à entrega. Ao longo de 32 horas modela-se um edifício completo, com arquitetura e elementos estruturais, e produz-se toda a documentação: plantas, cortes, alçados, mapas de quantidades e folhas de desenho. Cada passo é ligado à realidade construtiva e às regras de organização da informação que a obra e as restantes especialidades exigem, por isso não é apenas formação em software.'
    },
    {
      titulo: 'Objetivos',
      texto: 'No fim do curso, cada participante é capaz de:',
      itens: [
        'Arrancar e organizar um projeto em ' + ferramenta + ', com níveis, grelhas e vistas',
        'Modelar a arquitetura e os principais elementos estruturais de um edifício',
        'Criar e adaptar famílias e objetos de biblioteca às soluções construtivas reais',
        'Extrair áreas, quantidades e mapas diretamente do modelo',
        'Produzir a documentação do projeto e preparar as folhas de desenho',
        'Organizar a informação segundo a ISO 19650 e entregar o modelo em IFC, pronto a ser usado pelas restantes especialidades'
      ]
    },
    {
      titulo: 'A quem se destina',
      texto:
        'Profissionais e estudantes de arquitetura, engenharia, construção e gestão de obra que queiram entrar na metodologia BIM, e a quem já usa a ferramenta mas quer trabalhar com método. É útil, mas não obrigatório, conhecer um programa de CAD.'
    },
    {
      titulo: 'Metodologia',
      texto:
        'O curso segue um projeto-tipo do início ao fim. Cada tema é demonstrado pelo formador, experimentado pelo participante e seguido de um momento de dúvidas, com ênfase nas boas práticas que dão modelos eficientes e reutilizáveis. No fim, quem tiver 80% de presenças recebe certificado de formação.'
    }
  ];
}

window.CONTEUDO.cursos = {
  /* --------------------------- REVIT --------------------------- */
  revit: {
    nome: 'Modelação BIM: Revit',
    destaque: 'Revit',
    pagina: 'curso-revit.html',
    /* Onde se faz a inscrição. Quando o curso tiver página no Iscte-Meta Digital,
       troca por esse endereço. */
    inscricao: 'https://isctemetadigital.pt/formacao/',
    cartao: 'Domine a modelação, documentação e partilha de modelos BIM em Autodesk Revit.',
    estado: 'Em breve',
    /* Desenho axonométrico do edifício do Iscte, do curso de Revit do ISTAR.
       Para não depender desse site, guarda o ficheiro em assets/img e troca o caminho.
       Alternativa: gráfico próprio em assets/img/curso-revit.svg */
    imagem: 'https://istar.iscte-iul.pt/cursorevit/wp-content/uploads/sites/2/2018/07/Fundo.png',
    info: infoCurso(),
    sobre: sobreCurso('Revit'),
    formadores: ['Ricardo Resende', 'Sébastien Pinto da França Roux'],
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
    pagina: 'curso-archicad.html',
    inscricao: 'https://isctemetadigital.pt/formacao/',
    cartao:
      'Modele um edifício completo em Archicad, da arquitetura aos elementos estruturais, com documentação e entrega em IFC.',
    estado: 'Em breve',
    imagem: 'assets/img/curso-archicad.jpg',
    info: infoCurso(),
    sobre: sobreCurso('Archicad'),
    formadores: ['Ricardo Resende', 'Sébastien Pinto da França Roux'],
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
  },

  /* ------------------------- BIM PARA OBRA ------------------------ */
  obra: {
    nome: 'BIM para Obra',
    pagina: 'curso-bim-obra.html',
    inscricao: 'https://isctemetadigital.pt/formacao/',
    cartao: 'Ligue o modelo BIM ao planeamento, controlo e acompanhamento diário da obra.',
    estado: 'Em breve',
    imagem: 'assets/img/curso-bim-obra.svg',
    info: infoCurso('24 horas', '6 sessões'),
    sobre: [
      { titulo: 'Descrição', texto: 'Formação prática para aplicar BIM no contexto de obra, ligando modelos, equipas, planeamento e controlo de execução.' },
      { titulo: 'Objetivos', texto: 'Aprender a consultar e validar modelos, planear atividades, gerir informação e comunicar decisões no terreno.' },
      { titulo: 'A quem se destina', texto: 'Diretores e técnicos de obra, encarregados, engenheiros, arquitetos e profissionais de fiscalização.' },
      { titulo: 'Metodologia', texto: 'Exercícios baseados em situações de obra, com análise de modelos, tarefas de coordenação e fluxos de informação.' }
    ],
    modulos: [
      { titulo: 'BIM no contexto de obra', carga: '4 h', itens: ['Usos BIM na fase de construção', 'Modelo, documentação e informação de obra', 'Equipas, responsabilidades e CDE'] },
      { titulo: 'Leitura e validação de modelos', carga: '6 h', itens: ['Navegação e consulta de modelos federados', 'Medições e extração de informação', 'Verificação de compatibilidades e construtibilidade'] },
      { titulo: 'Planeamento e acompanhamento', carga: '6 h', itens: ['Planeamento 4D: modelo e cronograma', 'Preparação de frentes de trabalho', 'Registo de progresso e desvios'] },
      { titulo: 'Qualidade, segurança e comunicação', carga: '6 h', itens: ['Inspeções e listas de verificação', 'Registo de ocorrências no modelo', 'Comunicação entre obra, projeto e fiscalização'] },
      { titulo: 'Entrega e lições aprendidas', carga: '2 h', itens: ['Informação para receção e entrega', 'As built e gestão documental', 'Caso prático integrado'] }
    ]
  },

  /* ------------------- SOFTWARE PARA CONSTRUÇÃO ------------------- */
  software: {
    nome: 'Software para Construção',
    pagina: 'curso-software-construcao.html',
    inscricao: 'https://isctemetadigital.pt/formacao/',
    cartao: 'Selecione e utilize ferramentas digitais para planear, gerir e comunicar melhor em construção.',
    estado: 'Em breve',
    imagem: 'assets/img/curso-software-construcao.svg',
    info: infoCurso('24 horas', '6 sessões'),
    sobre: [
      { titulo: 'Descrição', texto: 'Curso orientado para a escolha e uso de ferramentas digitais que simplificam o trabalho em projeto, obra e gestão.' },
      { titulo: 'Objetivos', texto: 'Organizar informação, automatizar tarefas repetitivas e construir fluxos digitais claros para as equipas.' },
      { titulo: 'A quem se destina', texto: 'Profissionais e estudantes de construção, engenharia, arquitetura, gestão de obra e coordenação.' },
      { titulo: 'Metodologia', texto: 'Demonstrações curtas, exercícios guiados e definição de um fluxo de trabalho aplicável a um caso real.' }
    ],
    modulos: [
      { titulo: 'Ecossistema digital da construção', carga: '4 h', itens: ['Necessidades e processos da equipa', 'Critérios para selecionar ferramentas', 'Segurança, acessos e estrutura de informação'] },
      { titulo: 'Planeamento e controlo', carga: '6 h', itens: ['Cronogramas e tarefas colaborativas', 'Quadros de acompanhamento', 'Indicadores, relatórios e alertas'] },
      { titulo: 'Comunicação e gestão documental', carga: '6 h', itens: ['Partilha de ficheiros e versões', 'Pedidos, aprovações e registo de decisões', 'Reuniões e comunicação de obra'] },
      { titulo: 'Dados e automatização', carga: '6 h', itens: ['Folhas de cálculo estruturadas', 'Recolha de dados em campo', 'Automatização de tarefas e relatórios'] },
      { titulo: 'Fluxo de trabalho aplicado', carga: '2 h', itens: ['Mapear um processo atual', 'Desenhar uma melhoria digital', 'Plano de implementação'] }
    ]
  },

  /* -------------------- CICLO DE VIDA COM BIM -------------------- */
  cicloVida: {
    nome: 'Avaliação do Ciclo de Vida com BIM',
    pagina: 'curso-ciclo-vida-bim.html',
    inscricao: 'https://isctemetadigital.pt/formacao/',
    cartao: 'Use dados BIM para medir impactes ambientais e apoiar decisões de projeto mais sustentáveis.',
    estado: 'Em breve',
    imagem: 'assets/img/curso-ciclo-vida-bim.svg',
    info: infoCurso('24 horas', '6 sessões'),
    sobre: [
      { titulo: 'Descrição', texto: 'Formação para integrar Avaliação do Ciclo de Vida (ACV) e BIM na comparação de soluções de projeto e construção.' },
      { titulo: 'Objetivos', texto: 'Interpretar indicadores ambientais, preparar dados BIM e comunicar resultados que apoiem decisões informadas.' },
      { titulo: 'A quem se destina', texto: 'Arquitetos, engenheiros, consultores de sustentabilidade e estudantes com interesse em construção de baixo carbono.' },
      { titulo: 'Metodologia', texto: 'Exercícios práticos de modelação de dados, leitura de resultados e comparação de alternativas construtivas.' }
    ],
    modulos: [
      { titulo: 'Fundamentos de ACV na construção', carga: '4 h', itens: ['Ciclo de vida do edifício', 'Indicadores ambientais e carbono', 'Normas, declarações ambientais e limites do sistema'] },
      { titulo: 'Dados BIM para sustentabilidade', carga: '6 h', itens: ['Quantidades, materiais e classificação', 'Nível de informação necessário', 'Preparação e verificação de dados'] },
      { titulo: 'Cálculo e interpretação de impactes', carga: '6 h', itens: ['Cenários e hipóteses de cálculo', 'Leitura de resultados por elemento e fase', 'Incerteza e qualidade dos dados'] },
      { titulo: 'Decisão de projeto com ACV', carga: '6 h', itens: ['Comparação de alternativas', 'Estrutura, envolvente e materiais', 'Estratégias de redução de impacte'] },
      { titulo: 'Caso prático e comunicação', carga: '2 h', itens: ['Análise de um caso de estudo', 'Síntese visual de resultados', 'Recomendações para projeto'] }
    ]
  }
};
