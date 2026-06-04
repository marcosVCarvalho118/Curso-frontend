import { Component, signal, computed } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    
    <div class="counter-section">
      <button
        (click)="decrementar()"
        [disabled]="counter() === 0"
        >--
      </button>
      <span>Counter: {{ counter() }}</span>
      <button
        (click)="incrementar()"
        [disabled]="counter() >= limite()"
        >++
      </button>
      <button
        (click)="resetar()"
        >
        Reset
      </button>
    </div>
    
    <div class="controls-section">
      <div class="input-group">
        <label for="incremento">Incremento:</label>
        <input 
          id="incremento"
          type="number" 
          [value]="incremento()" 
          (input)="atualizarIncremento($event)"
          min="1"
          max="10"
        >
      </div>
      
      <div class="input-group">
        <label for="limite">Limite máximo:</label>
        <input 
          id="limite"
          type="number" 
          [value]="limite()" 
          (input)="atualizarLimite($event)"
          min="1"
          max="100"
        >
      </div>
    </div>
    
    <hr>
    
    <h3>Histórico</h3>
    <div class="history-controls">
      <button 
        (click)="limparHistorico()"
        [disabled]="historicoVazio()"
        class="clear-button"
      >
        Limpar histórico
      </button>
    </div>
    <div class="history-section">
      @for (item of historico(); track $index){
        <p>{{ item }}</p>
      }
      @if (historicoVazio()) {
        <p style="text-align: center; color: #a0aec0; font-style: italic;">Nenhuma operação ainda</p>
      }
    </div>
  `,
})
export class App {
  name: string = 'Marcos';
  
  // Estado com Signals
  counter = signal(0);
  incremento = signal(1);
  limite = signal(10);
  historico = signal<string[]>([]);

  // Computed states para otimizar a renderização do template
  historicoVazio = computed(() => this.historico().length === 0);

  incrementar() {
    const proximoValor = this.counter() + this.incremento();
    // Garante que o valor não ultrapasse o limite máximo estabelecido
    const novoValor = Math.min(proximoValor, this.limite());
    
    if (novoValor !== this.counter()) {
      this.counter.set(novoValor);
      this.historico.update((h: string[]) => [`+${this.incremento()} > ${novoValor}`, ...h]);
    }
  }

  decrementar() {
    const proximoValor = this.counter() - this.incremento();
    // Garante que o valor não seja menor que zero
    const novoValor = Math.max(proximoValor, 0);
    
    if (novoValor !== this.counter()) {
      this.counter.set(novoValor);
    this.historico.update((h: string[]) => [`+${this.incremento()} > ${novoValor}`, ...h]);
    }
  }

  resetar() {
    if (this.counter() !== 0) {
      this.counter.set(0);
     this.historico.update((h: string[]) => [`Reset > 0`, ...h]);
    }
  }

  atualizarIncremento(event: Event) {
    const target = event.target as HTMLInputElement;
    const valor = parseInt(target.value, 10);
    if (!isNaN(valor) && valor >= 1) {
      this.incremento.set(valor);
    }
  }

  atualizarLimite(event: Event) {
    const target = event.target as HTMLInputElement;
    const valor = parseInt(target.value, 10);
    if (!isNaN(valor) && valor >= 1) {
      this.limite.set(valor);
      // Se o limite atual for menor que o contador, ajusta o contador para o teto do limite
      if (this.counter() > valor) {
        this.counter.set(valor);
        this.historico.update((h: string[]) => [`Ajuste Limite > ${valor}`, ...h]);
      }
    }
  }

  limparHistorico() {
    this.historico.set([]);
  }
}

bootstrapApplication(App);