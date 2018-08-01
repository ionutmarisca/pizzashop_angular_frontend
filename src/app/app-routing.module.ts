import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntitiesComponent} from "./entities/entities.component";
import {PizzaDetailsComponent} from "./pizza/pizza-details/pizza-details.component";
import {PizzaListComponent} from "./pizza/pizza-list/pizza-list.component";

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'entities', component: EntitiesComponent },
  { path: 'pizzashop2010/detail/:id', component: PizzaDetailsComponent},
  { path: 'pizzashop2010/pizzas', component: PizzaListComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
