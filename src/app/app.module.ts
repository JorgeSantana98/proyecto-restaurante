import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './components/cabecero/cabecero.component';
import { LoginComponent } from './components/login/login.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { AboutComponent } from './components/about/about.component';
import { ContenidoInicioComponent } from './components/contenido-inicio/contenido-inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    LoginComponent,
    PiePaginaComponent,
    AboutComponent,
    ContenidoInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
