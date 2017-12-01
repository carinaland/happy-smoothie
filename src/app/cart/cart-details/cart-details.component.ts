import { Component, OnInit } from '@angular/core';
import { ICart } from 'app/cart/cart';
import { CartService } from 'app/cart/cart-service';
import { CookieService } from 'ngx-cookie-service';
import { ISelectedSmoothie } from 'app/cart/cart-details/selectedSmoothie';


@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html'
})
export class CartDetailsComponent implements OnInit {

  constructor(private cartService: CartService, private cookieService: CookieService) { }

  ngOnInit() {
    
    this.loadCart();
  }
  imageWidth: number = 50;
  imageHeight: number = 50;
  imageMargin: number = 2;

  subtotal: number;
  totalCost: number;

  cart: ICart[];
  //selectedSmoothies: ISelectedSmoothie[];
  public selectedSmoothies = [];
  cookieValue: string;
  objSmoothie: any;
  objSmoothieArray = [];
  smoothieIDs: string = "";
  public smoothieIDsArray = [];
  public smoothieQuantity = [];
  loadCart(): void {

    this.selectedSmoothies = JSON.parse(this.cookieService.get('selectedSmoothies'));
   
    for (var i = 0; i < this.selectedSmoothies.length; i++) {
      this.objSmoothie = this.selectedSmoothies[i];
      this.objSmoothieArray.push(this.selectedSmoothies[i]);
      this.smoothieIDsArray.push(this.objSmoothie.id);
      this.smoothieQuantity.push(this.objSmoothie.quantity);
      this.smoothieIDs += this.objSmoothie.id + ',';
    }

    //console.log("cookieQuantity" + this.smoothieQuantity)
    //console.log("cookieId" + this.smoothieIDsArray)

    this.cartService.getCart(this.smoothieIDs).subscribe((returnedCart) => {
      this.cart = returnedCart;
      
      for (var i = 0; i < this.cart.length; i++) {

        if (this.cart[i].idSmoothie == this.objSmoothieArray[i].id) {

          this.cart[i].quantity += this.objSmoothieArray[i].quantity - this.cart[i].quantity
        }
      }console.log(this.cart);
      this.countTotal(this.cart);
    })
  }

  //increment quantity
  incrementQuantity(index) {
    this.cart[index].quantity += 1;
    this.objSmoothie = this.selectedSmoothies[index];
    this.objSmoothie.quantity = this.cart[index].quantity;
    this.selectedSmoothies[index] = this.objSmoothie;
    this.cookieService.set('selectedSmoothies', JSON.stringify(this.selectedSmoothies));
    this.total += this.cart[index].price;
    
  }

  //decrementt quantity
  decrementQuantity(index) {
    if (this.cart[index].quantity > 1)
      this.cart[index].quantity -= 1;
    this.objSmoothie = this.selectedSmoothies[index];
    this.objSmoothie.quantity = this.cart[index].quantity;
    this.selectedSmoothies[index] = this.objSmoothie;
    this.cookieService.set('selectedSmoothies', JSON.stringify(this.selectedSmoothies));
    this.total -= this.cart[index].price;
  }

  //remove the smoothie from cart
  removeProduct(index) {
    this.total -= this.cart[index].price * this.cart[index].quantity
    this.cart.splice(index, 1);
    this.selectedSmoothies.splice(index, 1);
    this.cookieService.set('selectedSmoothies', JSON.stringify(this.selectedSmoothies));
    
  }

  total: number = 0;
  //calculate total
  countTotal(cart){
    console.log(this.cart)
    for (var i = 0; i < this.cart.length; i++) {
      this.total += this.cart[i].price * this.cart[i].quantity
      console.log(this.total)
 }
}
}
  
