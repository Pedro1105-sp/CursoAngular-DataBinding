import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `.highlight {
      background-color: yellow;
      font-weight: bold;
  }`
  ]
})
export class DataBindingComponent implements OnInit {

  url: any = "http://loiane.com";
  urlImagem = "http://lorempixel.com.br/400/200/nature/";

  valorAtual: any;
  valorSalvo: any;
  isMouseOver: boolean = false;

  nome: any = "abc";

  pessoa: any = {
    nome: "def",
    idade: 20
  }

  nomeDoCurso: string = "Angular";

  valorInicial = 15;
  

  cursoAngular: any = true;

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado() {
    alert('Botão foi clicado');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor:any){ 
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor)
  }

  constructor() { }

  ngOnInit() {
    
  }

}
