import { Component, Input, signal } from '@angular/core';

// Define o componente Angular
@Component({
  // Nome da tag utilizada para inserir o componente em outro arquivo HTML
  selector: 'app-placar',

  // Lista de componentes, diretivas ou pipes importados (vazia neste caso)
  imports: [],

  // Arquivo HTML associado ao componente
  templateUrl: './placar.html',

  // Arquivo CSS associado ao componente
  styleUrl: './placar.css',
})

// Classe que representa o componente Placar
export class Placar {

  // Recebe o nome do time do componente pai
  @Input() nomeTime = 'Time';

  // Recebe a pontuação do time adversário
  @Input() pontosOponente = 0;

  // Signal que armazena a pontuação atual do time
  pontos = signal(0);

  // Adiciona 1 ponto ao placar
  adicionarPontos() {

    // Atualiza o valor atual da signal somando 1
    // v representa o valor atual da pontuação
    this.pontos.update(v => v + 1);
  }

  // Zera a pontuação do time
  resetarPontos() {

    // Define a pontuação como 0
    this.pontos.set(0);
  }

  // Retorna a cor da pontuação conforme a comparação com o adversário
  cor(): string {

    // Verde quando este time está vencendo
    if (this.pontos() > this.pontosOponente) return 'green';

    // Vermelho quando este time está perdendo
    if (this.pontos() < this.pontosOponente) return 'red';

    // Cinza quando há empate
    return 'gray';
  }
}