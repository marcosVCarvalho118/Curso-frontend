import { Component, signal } from '@angular/core';
// Importa o decorator Component para criar componentes Angular
// e o signal para criar variáveis reativas.

import { bootstrapApplication } from '@angular/platform-browser';
// Importa a função responsável por iniciar a aplicação Angular.

import { Placar } from './app/placar/placar';
// Importa o componente Placar criado anteriormente.


@Component({
  // Define o nome da tag que representa o componente principal.
  // Essa tag é usada no index.html: <app-root></app-root>
  selector: 'app-root',

  // Lista os componentes que podem ser utilizados dentro deste componente.
  // Aqui estamos permitindo o uso do componente Placar.
  imports: [Placar],

  // Template HTML do componente escrito diretamente no TypeScript.
  template: `

    <!-- Componente do placar do Flamengo -->
    <app-placar

      <!-- Define o nome do time através do Input nomeTime -->
      nomeTime="Flamengo"

      <!-- Envia a pontuação do adversário (Fluminense)
           para o componente Placar -->
      [pontosOponente]="pontosFluminense()"

      <!-- Envia o evento de mudança de pontos.
           Quando o placar emitir novos pontos,
           chama a função atualizarFlamengo(). -->
      pontosMudaram="atualizarFlamengo($event)">

    </app-placar>


    <!-- Quebra de linha entre os placares -->
    <br />

    <!-- Texto indicando confronto entre os times -->
    <span> VS </span>

    <!-- Nova quebra de linha -->
    <br />


    <!-- Componente do placar do Fluminense -->
    <app-placar

      <!-- Define o nome do time -->
      nomeTime="Fluminense"

      <!-- Envia a pontuação do Flamengo como pontuação adversária -->
      [pontosOponente]="pontosFlamengo()"

      <!-- Recebe a alteração de pontos do Fluminense -->
      pontosMudaram="atualizarFluminense($event)">

    </app-placar>

  `
})


// Classe principal da aplicação
export class App {


  // Cria uma variável reativa para armazenar os pontos do Flamengo.
  // Quando o valor muda, o Angular atualiza automaticamente a tela.
  pontosFlamengo = signal(0);


  // Cria uma variável reativa para armazenar os pontos do Fluminense.
  pontosFluminense = signal(0);



  // Método chamado quando o componente do Flamengo altera sua pontuação.
  atualizarFlamengo(pontos: number) {

    // Atualiza o valor do signal com a nova pontuação recebida.
    this.pontosFlamengo.set(pontos);

  }



  // Método chamado quando o componente do Fluminense altera sua pontuação.
  atualizarFluminense(pontos: number) {

    // Atualiza o valor do signal com a nova pontuação recebida.
    this.pontosFluminense.set(pontos);

  }

}


// Inicializa a aplicação Angular.
// O componente App será o componente raiz da aplicação.
bootstrapApplication(App);