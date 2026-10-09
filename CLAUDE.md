# Site construcaodigital.com — instruções para o Claude Code

Atenção: o repositório tem `.nojekyll`, por isso tudo o que está aqui é público
(incluindo este ficheiro). Não escrever aqui informação interna.

## O que é o site

Site da Comunidade de Construção Digital: uma comunidade baseada no Iscte-Sintra,
com docentes e investigadores de carreira e convidados da indústria. Divulga a
licenciatura, o Mestrado, os cursos de especialização e formação à medida, e
reencaminha para as inscrições no site do Iscte.

Site estático, sem build. Publicado pelo GitHub Pages a partir do ramo `main`.
Ver `GUIA.md` para a estrutura completa.

## Como trabalhar

- O Ricardo Resende (coordenador) decide. Publica-se diretamente no `main`;
  o site atualiza em 1 a 2 minutos.
- Conteúdo em `conteudo/*.js`; aspeto em `assets/css/style.css`; montagem em
  `assets/js/render.js`. Para mudar texto, mexer só em `conteudo/`.
- Páginas interiores são pastas com `index.html` e `<body data-base="../">`.
- Português europeu (PT-PT), frases diretas, sem emojis.
- Antes de publicar uma alteração de estrutura, servir localmente
  (`python3 -m http.server`) e ver a página em largura de computador e de telemóvel.
- Commits com autor "Ricardo Resende <rresende@gmail.com>".

## Regras de conteúdo

- O Mestrado em Construção Digital (curso 0536) está acreditado pela A3ES desde
  26-08-2026. Não confundir com a pós-graduação.
- Histórico de formação e projetos: só atividades contratadas ao Iscte. Não
  mencionar o ISTAR nessas entradas. Não acrescentar clientes ou projetos sem
  confirmação do Ricardo.
- Números e afirmações têm de ser verificáveis; preferir casos com resultado
  concreto a listas de nomes.

## Página "Quem somos" (`quem-somos/`, dados em `conteudo/quemsomos.js`)

- Equipa vem de `conteudo/formadores.js`, campo `grupo`: `carreira` ou `convidado`;
  campo opcional `perfil` (Ciência-Iscte ou ORCID).
- Projetos com `inicio: true` aparecem também na página inicial (manter três).

## Em aberto

1. Casos em "Projetos com organizações": falta, para cada um, o que se fez e o
   resultado concreto. Rever um de cada vez com o Ricardo.
2. Linha de investigação "Automação e inteligência artificial": sustentar com um
   projeto ou publicação, ou fundir noutra linha.
3. Perfis científicos da Leonor Domingos, Sara Parece e Miguel Torres Curado;
   confirmar a divisão carreira/convidados.
4. Cartão do Mestrado em `conteudo/programas.js` ainda diz "Inscrições abertas";
   acrescentar "Acreditado pela A3ES" e a próxima fase de candidaturas.
5. Pasta `Claude outputs/` está publicada no site; retirar ou pôr no `.gitignore`.
