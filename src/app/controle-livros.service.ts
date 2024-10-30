import { Injectable } from '@angular/core';
import { Livro } from './livro'
@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {codigo: 1, codEditora: 1, titulo: 'O Senhor dos Anéis: A Sociedade do Anel', resumo: 'A história de um hobbit chamado Frodo Bolseiro que embarca em uma jornada épica para destruir um poderoso anel.', autores: ['J.R.R. Tolkien'] },
    {codigo: 2, codEditora: 2, titulo: '1984', resumo: 'Uma distopia sobre um futuro totalitário sob a vigilância constante de Big Brother, onde a liberdade e a verdade são distorcidas.', autores: ['George Orwell'] },
    {codigo: 3, codEditora: 3, titulo: 'O Pequeno Príncipe', resumo: 'Uma fábula sobre um príncipe que viaja por planetas e aprende sobre a vida, amor e a natureza humana.', autores: ['Antoine de Saint-Exupéry'] }, 
  ]

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(novoLivro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(livro => livro.codigo)) + 1;
    novoLivro.codigo = novoCodigo;
    this.livros.push(novoLivro); 
  }

  excluir(codigo: number) : void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index >= 0) {
      this.livros.splice(index, 1)
    }
  }
}
