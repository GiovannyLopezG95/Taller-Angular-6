import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Importacion de componentes
import {LoginPageComponent} from './componentes/login-page/login-page.component';
import {RegisterPageComponent} from './componentes/register-page/register-page.component';
import {PerfilPageComponent} from './componentes/perfil-page/perfil-page.component';

// creacion de objetos para definir rutas
const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'perfil', component: PerfilPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
