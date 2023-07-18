import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/cliente/about/about.component';
import { ContactoComponent } from './components/cliente/contacto/contacto.component';
import { ContenidoInicioComponent } from './components/cliente/contenido-inicio/contenido-inicio.component';
import { MenuComponent } from './components/cliente/menu/menu.component';
import { ReservacionComponent } from './components/cliente/reservacion/reservacion.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '',component: ContenidoInicioComponent},
  {path: 'login',component: LoginComponent},
  {path:'about',component: AboutComponent},
  {path:'menu',component: MenuComponent},
  {path:'reservacion',component: ReservacionComponent},
  {path:'contacto',component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
