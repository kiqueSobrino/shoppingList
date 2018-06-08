import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ShoppingLists } from '../../app/shopping-list';
import { SHOPPINGLISTS } from '../../app/mock-lists';

@IonicPage()
@Component({
  selector: 'page-mercadillo-list',
  templateUrl: 'mercadillo-list.html',
})
export class MercadilloListPage {

  shop = SHOPPINGLISTS[1];
  shopName = this.shop.name;
  products = this.shop.products;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MercadilloListPage');
    console.log(this.shop);
  }

}
