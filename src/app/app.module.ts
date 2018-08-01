import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntitiesComponent } from './entities/entities.component';
import { EntitiesListComponent } from './entities/entities-list/entities-list.component';
import {EntityService} from "./entities/shared/entity.service";
import {AppRoutingModule} from "./app-routing.module";
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaDetailsComponent } from './pizza/pizza-details/pizza-details.component';
import {PizzaService} from "./pizza/shared/pizza.service";
import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EntitiesComponent,
    EntitiesListComponent,
    PizzaComponent,
    PizzaDetailsComponent,
    PizzaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EntityService, PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
