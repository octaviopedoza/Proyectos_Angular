import { PokedexPaginaComponent } from './modules/pokedex/pokedex-pagina/pokedex-pagina.component';
import { ClimaPageComponent } from './modules/clima/clima-page/clima-page.component';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorPageComponent } from './modules/contador/contador-page/contador-page.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'contador', component: ContadorPageComponent},
  {path:'clima', component: ClimaPageComponent},
  {path:'pokedex',component: PokedexPaginaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
