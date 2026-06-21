import { Component,Input,signal } from '@angular/core';

@Component({
  selector: 'app-placar',
  imports: [],
  templateUrl:'./placar.html',
  styleUrl:'./placar.css',
})
export class Placar {
  @Input() nomeTime = 'Time';
  @Input() pontosOponente = 0; 
  pontos = signal(0)

  adicionarPontos(){ // () - Consultando valor
this.pontos.update(v => v+1) // v = valor atual atualiza + 1
  }
resetarPontos(){
this.pontos.set(0)
}

cor(): string {
  if (this.pontos() > this.pontosOponente) return 'green';
  if (this.pontos() < this.pontosOponente) return 'red';
  return 'gray';
}
}