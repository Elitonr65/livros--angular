import { AppComponent } from "./app.component";
import { LivroListaComponent } from "./livro-lista/livro-lista.component";
import { LivroDadosComponent } from "./livro-dados/livro-dados.component";
import { BrowserModule } from "@angular/platform-browser";
import { ControleLivrosService } from "./controle-livros.service";
import { ControleEditoraService } from "./controle-editora.service";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    declarations: [
        AppComponent,
        LivroListaComponent,
        LivroDadosComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [
        ControleLivrosService,
        ControleEditoraService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})

export class AppModule { }