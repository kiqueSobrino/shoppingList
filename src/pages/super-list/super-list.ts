import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ShoppingLists } from '../../app/shopping-list';
import { SHOPPINGLISTS } from '../../app/mock-lists';

@IonicPage()
@Component({
  selector: 'page-super-list',
  templateUrl: 'super-list.html',
})
export class SuperListPage {
  
  shop = SHOPPINGLISTS[0];
  shopName = this.shop.name;
  shopDate = this.shop.date;
  products = this.shop.products;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuperListPage');    
  }

  updateCheck(item) {
    console.log(item);
    // this.storage.set('name', 'Max');    
  }
}
