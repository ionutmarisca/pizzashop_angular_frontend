export class Pizza {
  constructor(id, name, description, price, ingredients){
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
  }
  id: number;
  name: string;
  description: string;
  price: number;
  ingredients: string[];
}
