import { Router } from '@angular/router';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from './../controle-editora.service';
import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro();
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n').map(autor => autor.trim()).filter(autor => autor);
    this.servLivros.incluir(this.livro);
    
    this.router.navigateByUrl('/lista')
  }
}
