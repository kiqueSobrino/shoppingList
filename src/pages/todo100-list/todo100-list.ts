import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ShoppingLists } from '../../app/shopping-list';
import { SHOPPINGLISTS } from '../../app/mock-lists';

@IonicPage()
@Component({
  selector: 'page-todo100-list',
  templateUrl: 'todo100-list.html',
})
export class Todo100ListPage {

  shop = SHOPPINGLISTS[2];
  shopName = this.shop.name;
  products = this.shop.products;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
