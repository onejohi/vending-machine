import { Component } from '@angular/core'
import { DataService } from "../services/data.service"
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //initialize the current amount to zero to begin fresh transactions
  initialAmount: number = 0;
  vendorItems: Item[];

  constructor(public data: DataService, public snack: MatSnackBar) {
    //get all items available for selling from data service
    this.data.getVendorItems().subscribe(items => {
      this.vendorItems = items
    })
  }

  //increment value of balance each time user adds in a new coin
  addCoin(value) {
    this.initialAmount = this.initialAmount + value
  }

  //when a user makes a purchase, pass in the price and name of the item to be used later
  makePurchase(price: number, name: string) {
    //checks to see if you've added enough money to make a purchase
    if(price > this.initialAmount) {
      //calculate how much more is needed for current item being sold
      let remaining = price - this.initialAmount
      this.snack.open(`You don't have enough money to purchase this item, please add KES ${remaining}.`, "Ok", {
        duration: 3000,
        verticalPosition: 'top'
      })
    } else {
      //decrement value from the amount user has
      this.initialAmount = this.initialAmount - price
      this.snack.open(`Vending ${name} worth ${price}, your current available balance is ${this.initialAmount}.`, "Ok", {
        duration: 3500,
        verticalPosition: 'top'
      })
    }
  }

  //complete the transaction, give user back balance and reset the vending machine
  completeTransaction() {
    if(this.initialAmount == 0) {
      this.snack.open(`Thank you for using our vending machine, you have no available balance.`, "Ok", {
        duration: 3000,
        verticalPosition: 'top'
      })
    } else {
      this.snack.open(`Thank you for using our vending machine, your balance is ${this.initialAmount}.`, "Ok", {
        duration: 3000,
        verticalPosition: 'top'
      })
      //reset balance to 0 if user is done buying items
      this.initialAmount = 0
    }
  }

}

class Item {
  code: number;
  name: string;
  price: number; 
}