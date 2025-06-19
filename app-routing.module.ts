import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioPadreComponent } from './formulario-padre/formulario-padre.component';
import { ListadoVotosComponent } from './votos/listado-votos.component';

const routes: Routes = [
  { path: '', redirectTo: 'formulario', pathMatch: 'full' },
  { path: 'formulario', component: FormularioPadreComponent },
  { path: 'votos', component: ListadoVotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```
