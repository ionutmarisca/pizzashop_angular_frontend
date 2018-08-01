import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from "../shared/pizza.model";
import {ActivatedRoute, Params} from "@angular/router";
import {PizzaService} from "../shared/pizza.service";

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})

export class PizzaDetailsComponent implements OnInit {
  @Input()
  pizza: Pizza;

  constructor(private pizzaService: PizzaService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.pizzaService.getPizza(+params['id']))
      .subscribe(pizza => this.pizza = pizza);
  }

  save(): void {
    this.pizzaService.update(this.pizza)
      .subscribe(_ => _);
  }
}
