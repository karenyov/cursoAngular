import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Livro A',
    rating: 4.5321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 1),
    url: 'http://a.co/glgjpRP'
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro: string;

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  });

  valorAsync2 = Observable.interval(2000)
    .map(valor => 'Valor assíncrono 2');

  constructor() { }

  ngOnInit() {
  }

  addCurso(valor) {
    this.livros.push(valor);
  }

  obterCursos(){

    if (this.livros.length === 0 || this.filtro === undefined
    || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter(
       v => v.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
    );
  }

}
