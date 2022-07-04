import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* pages */
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  /* a primeiira rota vai ser a primeira pagina
  a ser renderizada na tela */
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
