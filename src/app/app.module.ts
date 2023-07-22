import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './components/cliente/cabecero/cabecero.component';
import { LoginComponent } from './components/login/login.component';
import { PiePaginaComponent } from './components/cliente/pie-pagina/pie-pagina.component';
import { AboutComponent } from './components/cliente/about/about.component';
import { ContenidoInicioComponent } from './components/cliente/contenido-inicio/contenido-inicio.component';
import { MenuComponent } from './components/cliente/menu/menu.component';
import { ContactoComponent } from './components/cliente/contacto/contacto.component';
import { ReservacionComponent } from './components/cliente/reservacion/reservacion.component';
import { BarraLateralComponent } from './components/Administrador/barra-lateral/barra-lateral.component';
import { BarraSuperiorComponent } from './components/Administrador/barra-superior/barra-superior.component';
import { AppAdministradorComponent } from './components/Administrador/app-administrador/app-administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    LoginComponent,
    PiePaginaComponent,
    AboutComponent,
    ContenidoInicioComponent,
    MenuComponent,
    ContactoComponent,
    ReservacionComponent,
    BarraLateralComponent,
    BarraSuperiorComponent,
    AppAdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
