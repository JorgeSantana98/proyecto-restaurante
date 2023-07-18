import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/cliente/about/about.component';
import { ContenidoInicioComponent } from './components/cliente/contenido-inicio/contenido-inicio.component';
import { MenuComponent } from './components/cliente/menu/menu.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '',component: ContenidoInicioComponent},
  {path: 'login',component: LoginComponent},
  {path:'about',component: AboutComponent},
  {path:'menu',component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
