export class commodity {
  id: number;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;

  constructor(id: number, name: string, price: number, quantity: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.totalPrice = price * quantity;
  }
}
