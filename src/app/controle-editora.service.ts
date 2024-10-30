import { Injectable } from '@angular/core';
import { Editora } from './editora';
@Injectable({
  providedIn: 'root'
})

export class ControleEditoraService {
  private editoras: Array<Editora> = [
    new Editora(1, 'HarperCollins'),
    new Editora(2, 'Companhia das Letras'),
    new Editora(3, 'Editora Melhoramentos'),
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : "Nome não encontardo";
  }

}
