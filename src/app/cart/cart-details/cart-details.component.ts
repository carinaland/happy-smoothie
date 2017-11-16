import { Component, OnInit } from '@angular/core';
import { ICart } from 'app/cart/cart';
import { CartService } from 'app/cart/cart-service';


@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html'
})
export class CartDetailsComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
    //this.countTotalCost(this.cart);
    this.loadCart();
    
  }
  imageWidth: number = 50;
  imageHeight: number = 50;
  imageMargin: number = 2;

  //quantity: number = 1;
  subtotal: number;
  totalCost: number;

  cart: ICart[];
 
  loadCart(): void {
    this.cartService.getCart("1, 2").subscribe((returnedCart) => {
      this.cart = returnedCart;
    })
  }

  //increment quantity
  incrementQuantity(i) {
    this.cart[i].quantity += 1;
  }

  //decrementt quantity
  decrementQuantity(i) {
    if (this.cart[i].quantity > 1)
      this.cart[i].quantity -= 1;
  }

  //remove the smoothie from cart
  removeProduct(i) {
    this.cart.splice(i, 1);
  }

  /*totalArray: any[];
  countTotalCost(cart: ICart[]) {
    this.totalArray = [];
    for (var i = 0; i < this.cart.length; i++) {
      let x = cart[i];
      this.totalArray.push({
        price: x.price,
        quantity: x.quantity
      });
     return this.totalCost += x.price * x.quantity;
    
    }
    console.log(this.totalCost);
  }*/
}
