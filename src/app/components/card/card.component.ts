import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  gameCoverCard:string = "";

  @Input()
  gameLabelCard:string= "";

  @Input()
  consolePlataformCard:string = "";

  @Input()
  priceGameCard:string = "";

  constructor(){}

  ngOnIn():void{

  }
  //para dar valor aos objetos que são sub componentes e recebem valor.
  //eu devo inicializar os valores nos componentes pai e depois colocar o valor recebido no componente pai no filho.
  //exempor que coloquei o mesmo nome da variavel do componente filho e coloquei o card pra diferenciar.
  //se voce entrar no html do card que pedo os componentes filhos.
  //la vai está as variaves do pai como resposta para as variaveis filhas.
}
