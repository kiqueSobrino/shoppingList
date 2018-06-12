import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  title = 'Mi lista:';
  items: Array<{ name: string, price: string }>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    // private storage: Storage
  ) {

    this.items = [];
    this.items = [
      {
        name: 'patatas',
        price: '10'
      },
      {
        name: 'manzanas',
        price: '20'
      },
      {
        name: 'pollo',
        price: '9'
      }
    ];
  }

  updateCheck(item) {
    console.log(item);
    // this.storage.set('name', 'Max');
  }

  addItem(newItemName, newItemPrice) {
    this.items.push({ name: newItemName, price: newItemPrice })
  }

  deleteItem(item) {
    console.log(item);
  }

  // itemTapped(event, item) {
  //   // That's right, we're pushing to ourselves!
  //   this.navCtrl.push(ListPage, {
  //     item: item
  //   });
  // }
}
