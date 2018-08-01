import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";

import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/map';
import {Injectable} from "@angular/core";
import {Pizza} from "./pizza.model";

/**
 * Created by ionut on 12/06/2017.
 */
@Injectable()
export class PizzaService {
  private pizzaUrl = 'http://localhost:8080/api/pizza';
  private pizzaUrlUpdate = 'http://localhost:8080/api/pizzaupdate';
  private header = new Headers({"Content-Type": "application/json"});

  constructor(private http: Http) {}

  getPizza(id: number): Observable<Pizza> {
    return this.http.get(this.pizzaUrl + "/" + id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  update(pizza): Observable<Pizza> {
    const url = `${this.pizzaUrl}/${pizza.id}`;
    return this.http
      .put(url, JSON.stringify({"pizza": pizza}), {headers: this.header})
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateAll(value: Number): Observable<Object> {
    const url = `${this.pizzaUrlUpdate}/${value}`;
    return this.http
      .get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractDataPizza(res: Response) {
    let body = res.json();
    return body.pizzas || {};
  }

  getPizzas(): Observable<Pizza[]> {
    return this.http.get(this.pizzaUrl + "s")
      .map(this.extractDataPizza)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log("extractData: " + body);
    return body || {};
  }
  private handleError(error: Response | any) {
    console.log("handleError: " + error);
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
