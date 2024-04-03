import { Component, OnInit } from '@angular/core';
import { CartService } from '../servies/cart.service';
import { FoodService } from '../servies/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
   cart!: Cart;                    
  constructor(private cartService: CartService) {
    this.setcart();
  }

  ngOnInit(): void {
  }
  setcart() {
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItme: CartItem) {
    this.cartService.removeFromCart(cartItme.food.id);
    this.setcart(); 
  }
  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setcart();
  }

}
