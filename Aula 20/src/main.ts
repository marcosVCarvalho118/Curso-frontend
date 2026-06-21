import { Component,signal} from '@angular/core';
import { bootstrapApplication} from '@angular/platform-browser';
import {Placar} from  './app/placar/placar';

@Component({
  selector: 'app-root',
  imports: [Placar],
  template: `
    <app-placar
      nomeTime="Flamengo"
      [pontosOponente]="pontosFluminense()"
   pontosMudaram ="atualizarFlamengo($event)">
    </app-placar>

    <br />
    <span> VS </span>
    <br />

    <app-placar
      nomeTime="Fluminense"
      [pontosOponente]="pontosFlamengo()"
     pontosMudaram ="atualizarFluminense($event)">
    </app-placar>
  `
})
export class App {
  pontosFlamengo = signal(0);
  pontosFluminense = signal(0);

  atualizarFlamengo(pontos: number) {
    this.pontosFlamengo.set(pontos);
  }

  atualizarFluminense(pontos: number) {
    this.pontosFluminense.set(pontos);
  }
}

bootstrapApplication(App);
