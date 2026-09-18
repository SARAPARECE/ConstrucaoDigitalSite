# Guia de manutenção do site

Site estático, sem instalações nem comandos. Editas ficheiros de texto e vês
o resultado abrindo `index.html` no browser (duplo clique). Para publicar,
fazes Sync no VS Code e o GitHub Pages atualiza `construcaodigital.com`.

## Onde está cada coisa

```
index.html            página inicial
recursos.html         índice de recursos (trabalhos, biblioteca)
trabalhos.html        trabalhos de antigos alunos
biblioteca.html       biblioteca de recursos
modelo-pagina.html    modelo para criar uma página nova

conteudo/             TODO O CONTEÚDO EDITÁVEL
  site.js             menu, contactos, rodapé, números e logótipos das instituições
  destaques.js        carrossel da página inicial
  programas.js        licenciatura, mestrado e cursos de especialização
  noticias.js         notícias da página inicial
  formadores.js       formadores
  parceiros.js        logótipos dos parceiros
  trabalhos.js        trabalhos de antigos alunos
  biblioteca.js       recursos da biblioteca

assets/
  css/style.css       todo o aspeto do site
  js/script.js        menu, tema claro/escuro, carrossel, animações
  js/render.js        constrói cabeçalho, rodapé e listas a partir de conteudo/
  img/                imagens e fotografias
  logos/              logótipos da Construção Digital
```

Regra simples: **para mudar conteúdo, só mexes na pasta `conteudo/`.**

## Acrescentar uma notícia

Abre `conteudo/noticias.js` e copia um bloco entre chavetas para o topo da lista:

```js
  {
    tag: 'Evento',
    data: '14 out 2026',
    dataISO: '2026-10-14',
    titulo: 'Sessão de abertura do ano letivo',
    texto: 'Uma ou duas linhas sobre a notícia.',
    imagem: 'assets/img/destaque-1.svg',
    link: 'https://exemplo.pt/noticia'
  },
```

- `tag` é a etiqueta azul, `data` o que aparece no ecrã e `dataISO` a data em formato ano-mês-dia.
- `imagem`: põe o ficheiro em `assets/img/` e escreve aqui o caminho.
- `link`: deixa `''` se ainda não houver página para abrir.
- Atenção à vírgula no fim de cada bloco, e às plicas à volta do texto.

O mesmo formato serve para `trabalhos.js`.

## Acrescentar um formador

Em `conteudo/formadores.js`:

```js
  {
    nome: 'Nome da pessoa',
    cargo: 'Cargo, escola ou empresa',
    texto: 'Duas linhas de apresentação.',
    foto: 'assets/img/formador-nome.jpg',
    linkedin: 'https://www.linkedin.com/in/...'
  },
```

Sem fotografia, aponta para um dos avatares de iniciais já existentes em `assets/img/`.

## Acrescentar um parceiro

Em `conteudo/parceiros.js`, com o endereço do logótipo ou um ficheiro em `assets/img/`:

```js
  { nome: 'Empresa', logo: 'assets/img/logo-empresa.png', link: 'https://empresa.pt/' },
```

## Mudar um curso que tem página própria

Os cursos de Revit e Archicad vivem em `conteudo/cursos.js`. O cartão na página
inicial vai lá buscar o título, o texto, a imagem, a etiqueta e o link:

```js
window.CONTEUDO.especializacao = [
  { curso: 'revit' },
  { curso: 'archicad' },
```

Ou seja, mudas a imagem ou o nome em `cursos.js` e muda nos dois sítios ao mesmo
tempo. Só precisas de escrever `imagem` ou `titulo` no cartão se quiseres que ali
apareça algo diferente da página do curso.

## Criar uma página nova

1. Duplica `modelo-pagina.html` e dá-lhe um nome, por exemplo `eventos.html`.
2. Edita o título no topo do ficheiro (`<title>`) e o texto do hero.
3. Acrescenta a página ao menu em `conteudo/site.js`:

```js
    { texto: 'Eventos', href: 'eventos.html' },
```

Para a página ficar dentro da lista que abre em Recursos, acrescenta-a ao `sub`
dessa entrada em vez de criares uma nova.

O cabeçalho e o rodapé são iguais em todas as páginas porque são construídos a
partir de `conteudo/site.js`. Mudas o menu num sítio e muda em todo o lado.

## Publicar

1. Abre o VS Code na pasta.
2. No separador Source Control, escreve uma mensagem e carrega em Commit.
3. Carrega em Sync Changes.
4. Um minuto depois o site está atualizado. Abre com Ctrl+F5 para saltar a cache.

## Se alguma coisa desaparecer da página

É quase sempre uma vírgula a mais ou a menos, ou uma plica por fechar num
ficheiro de `conteudo/`. Abre a página no browser, carrega em F12 e vê a consola:
a mensagem a vermelho diz o ficheiro e a linha do erro.
