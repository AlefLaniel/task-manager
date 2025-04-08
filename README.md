# Sistema de Gestão de Tarefas

Este é um sistema simples de gestão de tarefas desenvolvido em **Angular 19**, utilizando **Angular Material** para os componentes da interface e **TailwindCSS** para a estilização. O projeto simula um ambiente em que o usuário pode adicionar, listar, filtrar, editar, remover e visualizar os detalhes completos de cada tarefa em um modal.

## Funcionalidades

- **Tela Inicial - Listagem de Tarefas**
  - Exibição de tarefas em layout responsivo (grid adaptável a diferentes tamanhos de tela).
  - Cada tarefa mostra título, descrição e status (*Pendente*, *Em andamento*, *Concluído*).
  - Filtro de tarefas por status.

- **Adicionar Tarefa**
  - Formulário de criação de nova tarefa, aberto via `MatDialog`.
  - Campos: título, descrição e status.
  - Ao submeter, a nova tarefa é adicionada à lista.

- **Editar e Remover Tarefas**
  - Opção para editar tarefas, abrindo um formulário pré-preenchido em um `MatDialog`.
  - Opção para remover tarefas, com confirmação antes de excluir.

- **Detalhes da Tarefa**
  - Ao clicar em uma tarefa, é aberto um modal (utilizando `MatDialog`) que exibe detalhes completos da tarefa que são:
	- Título.
	- Descrição.
	- Status.
	- Data de criação da tarefa.
	- Data da ultima atualização da tarefa.


- **Extras (Opcional)**
  - Ordenação e pesquisa: funcionalidades para ordenar tarefas por data ou status e uma barra de pesquisa para buscar tarefas pelo título.

## Tecnologias Utilizadas

- **Angular 19** – Framework para desenvolvimento de aplicações web.
- **Angular Material** – Biblioteca de componentes UI com temas e interatividade.
- **TailwindCSS** – Biblioteca utilitária para estilização e responsividade.
- **RxJS** – Para manipulação de streams de dados e assinaturas (Observables).

## Pré-requisitos

- Node.js (versão LTS recomendada)
- Angular CLI instalado globalmente:
  ```bash
  npm install -g @angular/cli

## Instruções de instalação:
 - Para realizar a instalação e execução, é só executar os seguintes comandos: 
    ```bash
    npm install
    ng serve 
  