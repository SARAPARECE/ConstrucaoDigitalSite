/* Página "Quem somos": formação dada, projetos com organizações e investigação.
   A equipa vem de conteudo/formadores.js (campo "grupo": 'carreira' ou 'convidado').
   Para acrescentar um caso, copia um bloco entre chavetas e mantém a vírgula no fim. */

window.CONTEUDO = window.CONTEUDO || {};

/* Cursos de inscrição aberta já realizados no Iscte */
window.CONTEUDO.formacaoAberta = [
  { valor: '9', legenda: 'edições de Introdução à Modelação BIM com Revit' },
  { valor: '5', legenda: 'edições de Introdução à Programação Visual com Dynamo' },
  { valor: '2', legenda: 'edições de Navisworks: compatibilização, medição e planeamento de obra' }
];

/* Formação à medida contratada ao Iscte */
window.CONTEUDO.formacaoMedida = [
  {
    tipo: 'Formação à medida',
    entidade: 'Grupo Águas de Portugal',
    ano: '2025 e 2026',
    titulo: 'Metodologia BIM para diretores e gestores de projeto',
    texto: '16 horas de formação para as equipas de direção e gestão de projeto do grupo.'
  },
  {
    tipo: 'Formação à medida',
    entidade: 'Teixeira Duarte Construções',
    ano: '2020 e 2021',
    titulo: 'Metodologia BIM para direção e preparação de obra',
    texto: '48 horas de formação para as equipas de direção e de preparação de obra.'
  },
  {
    tipo: 'Formação à medida',
    entidade: 'HCI Construções',
    ano: '2020',
    titulo: 'Metodologia BIM para direção de obra',
    texto: '52 horas de formação para as equipas de direção de obra.'
  }
];

/* Projetos com organizações (consultoria, transferência de tecnologia, investigação aplicada).
   "inicio: true" faz o caso aparecer também na página inicial (mantém três). */
window.CONTEUDO.projetosOrganizacoes = [
  {
    tipo: 'Transferência de tecnologia',
    entidade: 'Openbook Architecture',
    ano: '2022',
    titulo: 'Especificações técnicas geradas a partir do modelo BIM',
    inicio: true,
    texto: 'Definição de um sistema de classificação e automação das especificações técnicas a partir de modelos BIM. Financiado pelo programa Metabuilding.'
  },
  {
    tipo: 'Transferência de tecnologia',
    entidade: 'Hyperlapse Construction Videos',
    ano: '2022',
    titulo: 'Vídeo de obra ligado ao modelo BIM',
    texto: 'Integração de vídeo e imagem com modelos BIM para o acompanhamento de obra. Financiado pelo programa Metabuilding.'
  },
  {
    tipo: 'Transferência de tecnologia',
    entidade: 'Estrela do Norte Construtores',
    ano: '2022',
    titulo: 'Monitorização digital de obra rodoviária',
    texto: 'Estudo tecnológico para digitalizar o acompanhamento e a monitorização da construção rodoviária. Financiado pelo programa Metabuilding.'
  },
  {
    tipo: 'Transferência de tecnologia',
    entidade: 'Limsen Consulting',
    ano: '2021',
    titulo: 'Automação de processos BIM',
    texto: 'Consultoria estratégica para a automação e virtualização de processos BIM. Financiado pelo programa Metabuilding.'
  },
  {
    tipo: 'Consultoria',
    entidade: 'daLuz Architektur, Zurique',
    ano: '2019',
    titulo: 'Implementação BIM num atelier de arquitetura',
    inicio: true,
    texto: 'Apoio à adoção da metodologia BIM na prática de projeto do atelier.'
  },
  {
    tipo: 'Investigação aplicada',
    entidade: 'Iscte',
    ano: '2016 a 2020',
    titulo: 'BIM na gestão do campus do Iscte',
    inicio: true,
    texto: 'Normalização dos desenhos, migração para modelos BIM e uma plataforma web para a manutenção e o controlo de stocks das instalações do campus.',
    link: 'https://ciencia.iscte-iul.pt/projects/application-of-building-information-modelling-to-campus-facility-management/1030',
    linkTexto: 'Ver o projeto'
  }
];

/* Linhas de investigação */
window.CONTEUDO.linhasInvestigacao = [
  {
    titulo: 'Sustentabilidade e ciclo de vida',
    texto: 'Avaliação de ciclo de vida e carbono incorporado a partir de modelos BIM, economia circular e passaportes digitais de produtos de construção.'
  },
  {
    titulo: 'Normalização e requisitos de informação',
    texto: 'Sistemas de classificação, ISO 19650 e verificação automática de requisitos de informação, em articulação com a CT 197 e a buildingSMART Portugal.'
  },
  {
    titulo: 'Gémeos digitais e gestão de ativos',
    texto: 'Continuidade da informação entre projeto e operação: BIM para gestão de instalações, sensores IoT e modelos à escala urbana.'
  },
  {
    titulo: 'Automação e inteligência artificial',
    texto: 'Programação, automação de processos e inteligência artificial aplicadas ao projeto, à obra e à gestão da informação.'
  }
];

/* Projetos de investigação financiados */
window.CONTEUDO.projetosInvestigacao = [
  {
    tipo: 'Horizonte Europa',
    entidade: 'Consórcio de 18 parceiros coordenado pelo Iscte',
    ano: '2024 a 2028',
    titulo: 'RETIME',
    texto: 'Ferramenta que cruza estações meteorológicas, redes de sensores e imagem de satélite para simular o impacto de fenómenos naturais à escala do bairro e do edifício.'
  },
  {
    tipo: 'FCT · Projeto exploratório',
    entidade: 'Iscte e Universidade de São Paulo',
    ano: '2025 a 2027',
    titulo: 'LIVARC',
    texto: 'Bioconstrução e robótica colaborativa para edifícios regenerativos, com software que gera modelos arquitetónicos adaptados ao contexto natural.'
  },
  {
    tipo: 'EEA Grants',
    entidade: 'Iscte, LNEC, Universidade do Minho e parceiros noruegueses',
    ano: '2020 a 2022',
    titulo: 'SECClasS',
    texto: 'Sistema de classificação para a construção com critérios de sustentabilidade, coordenado pelo Iscte.',
    link: 'https://secclass.pt/',
    linkTexto: 'secclass.pt'
  },
  {
    tipo: 'Erasmus+',
    entidade: 'Iscte e quatro instituições europeias',
    ano: '2021 a 2023',
    titulo: 'ATHENA',
    texto: 'Universidade digital europeia; responsável pelo curso Building Sustainability Assessment and Design through Digital Tools.',
    link: 'https://athenadigitaluniversity.eu/',
    linkTexto: 'athenadigitaluniversity.eu'
  }
];

/* Publicações selecionadas de membros da comunidade */
window.CONTEUDO.publicacoes = [
  {
    autores: 'S. Parece, R. Resende, V. Rato',
    titulo: 'BIM-based life cycle assessment: A systematic review on automation and decision-making during design',
    revista: 'Building and Environment',
    ano: '2025',
    link: 'https://doi.org/10.1016/j.buildenv.2025.113248'
  },
  {
    autores: 'S. Parece, R. Resende, V. Rato',
    titulo: 'Stakeholder perspectives on BIM-LCA integration in building design: Adoption, challenges, and future directions',
    revista: 'Building and Environment',
    ano: '2025',
    link: 'https://doi.org/10.1016/j.buildenv.2025.113434'
  },
  {
    autores: 'L. Domingos, R. Resende, S. Stellacci',
    titulo: 'Establishment of a smart building assessment framework in the context of smart cities',
    revista: 'Built Environment Project and Asset Management',
    ano: '2024',
    link: 'https://doi.org/10.1108/BEPAM-07-2023-0116'
  },
  {
    autores: 'M. T. Curado, R. Resende, V. M. Rato',
    titulo: 'Circular economy: current view from the construction industry based on published definitions',
    revista: 'Sustainability: Science, Practice and Policy',
    ano: '2024',
    link: 'https://doi.org/10.1080/15487733.2024.2364954'
  },
  {
    autores: 'R. Resende et al.',
    titulo: 'Plataforma Web-BIM para Gestão de Instalações de um Campus Universitário',
    revista: '1.º Congresso Português de Building Information Modelling (ptBIM)',
    ano: '2016',
    link: 'https://ciencia.iscte-iul.pt/publications/plataforma-web-bim-para-gestao-de-instalacoes-de-um-campus-universitario/30578'
  }
];
