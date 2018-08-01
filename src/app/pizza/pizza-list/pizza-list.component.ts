import { Component, OnInit } from '@angular/core';
import {Pizza} from "../shared/pizza.model";
import {PizzaService} from "../shared/pizza.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  errorMessage: string;
  pizzas: Pizza[];
  selectedPizza: Pizza;

  constructor(private pizzaService: PizzaService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getPizzas();
  }

  getPizzas() {
    this.pizzaService.getPizzas()
      .subscribe(
        pizzas => this.pizzas = pizzas,
        error => this.errorMessage = <any>error
      );
  }

  onSelect(pizza: Pizza): void {
    this.selectedPizza = pizza;
  }

  gotoDetail(pizza: Pizza): void {
    this.router.navigate(['/pizzashop2010/detail', this.selectedPizza.id]);
  }

  save(): void {
    this.pizzaService.update(this.selectedPizza)
      .subscribe(_ => _);
  }

  updateAll(priceUpdate: number): void {
    this.pizzaService.updateAll(priceUpdate)
      .subscribe(_ => this.getPizzas());
  }

}
