# Marvel App
Aplicação desenvolvida visando explorar e experimentar algumas tecnologias como:

1. TypeScript
2. GraphQL / Apollo
3. React Hooks

## Setup
1. Inicialize o projeto com o comando `docker-compose up`. Prossiga mesmo com a falha.
2. Instale as dependências da aplicação com o comando `docker-compose run --rm app npm install`
3. Instale as dependências da API com o comando `docker-compose run --rm api npm install`
4. Com as dependências instaladas, execute novamente `docker-compose up`

## Telas
A aplicação conta com duas telas que serão descritas junto aos respectivos prints abaixo.

### Página de Listagem
A Página de Listagem de Personagens é a página inicial da aplicação e realiza uma listagem inicial de Personagens por ordem alfabética.

![print página de listagem](https://github.com/xikaos/marvel-app/raw/master/docs/character-list.png)

A listagem conta também com um campo de busca que permite filtrar os Personagens pelo nome de acordo com o valor informado no campo:

![print página de listagem com busca](https://github.com/xikaos/marvel-app/raw/master/docs/character-list-search.png)

Ao clicar no card de um Personagem, o usuário é levado até a Página de Personagem.

#### Observações
Uma feature de "Carregar mais" ou de paginação não foi implementada em função das queries envolvendo paginação com offset e cursores estarem não funcionais na API GraphQL utilizada junto ao projeto. ([Items 3 e 4 TODO](#todo))


### Página de Personagem

A Página de Personagem exibe o nome, foto e descrição do Personagem clicado.

![print página do Personagem](https://github.com/xikaos/marvel-app/raw/master/docs/character-page.png)

Ao clicar no botão **Load Character Series** uma listagem de cards das séries que o Personagem participou ou participa é exibida na tela.

![print página do Personagem com as séries sendo listadas](https://github.com/xikaos/marvel-app/raw/master/docs/character-page-series.png)

Clicando no botão **Edit Character** uma pequena modal permite que o nome, a foto e a descrição do Personagem sejam atualizados.

![print página do Personagem com modal de edição aberta](https://github.com/xikaos/marvel-app/raw/master/docs/character-page-edit-modal.png)

Ao alterar os valores nos campos da modal, os elementos na Página do Personagem (nome, título, descrição) são também são atualizados. Ao clicar em **Submit** os dados são persistidos no `localStorage`. Através do recurso de `TypePolicies` do Apollo Client, os dados editados do Personagem são exibidos na Página de Listagem e na Página do Personagem.

#### Página do Personagem com informações editadas
![print página do Personagem com informações do Personagem editadas](https://github.com/xikaos/marvel-app/raw/master/docs/character-page-edited.png)

#### Página de Listagem com informações editadas do Personagem
![print página do Personagem com informações do Personagem editadas](https://github.com/xikaos/marvel-app/raw/master/docs/character-list-edited.png)

## TODO
1. Testes Unitários / Funcionais.
2. Testes End-to-End.
3. Correção das queries com paginação e cursores.
4. Implementação das Features de Paginação / Load More.
5. Permitir a edição das séries do Personagem.
