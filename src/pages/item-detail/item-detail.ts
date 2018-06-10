import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SHOPPINGLISTS } from '../../app/mock-lists';

/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
  item: any;

  shop = SHOPPINGLISTS[0];
  shopName = this.shop.name;
  shopDate = this.shop.date;
  products = this.shop.products;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.item = navParams.get('item') || this.products;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailPage');
  }

}
