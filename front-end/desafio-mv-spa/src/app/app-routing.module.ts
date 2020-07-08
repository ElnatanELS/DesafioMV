import { CnesTipoUnidadeComponent } from './compentes/paginas/cnes-tipo-unidade/cnes-tipo-unidade.component';
import { CnesEstadosComponent } from './compentes/paginas/cnes-estados/cnes-estados.component';
import { CnesAtivosComponent } from './compentes/paginas/cnes-ativos/cnes-ativos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  component: CnesAtivosComponent,
},
{
  path:"cnes-estados",
  component: CnesEstadosComponent
},
{
  path:"cnes-tipos",
  component: CnesTipoUnidadeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
