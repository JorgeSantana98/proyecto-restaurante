import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContenidoInicioComponent } from './components/contenido-inicio/contenido-inicio.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '',component: ContenidoInicioComponent},
  {path: 'login',component: LoginComponent},
  {path:'about',component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
