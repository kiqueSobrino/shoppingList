import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SHOPPINGLISTS } from '../../app/mock-lists';
import { ShoppingLists } from '../../app/shopping-list';

import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';

import { SuperListPage } from '../super-list/super-list';
import { MercadilloListPage } from '../mercadillo-list/mercadillo-list';
import { Todo100ListPage } from '../todo100-list/todo100-list';

import { MyApp } from '../../app/app.component';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  key: string = 'Lists';
  name: string = 'Lista sin nombre';

  shops = SHOPPINGLISTS;
  myApp = MyApp;

  pages: Array<{ shop: string, component: any }>;

  constructor(
    public navCtrl: NavController,
    private storage: Storage,
    private geolocation: Geolocation,
  ) {

    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
    })
      .catch((error) => {
        console.log('Error getting location', error);
      });

    this.pages = [
      { shop: 'Super', component: SuperListPage },
      { shop: 'Mercadillo', component: MercadilloListPage },
      { shop: 'Todo a 100', component: Todo100ListPage }
    ];

  }

  addList(newList) {
    //this.storage.set(this.key, { name: newList });
    this.storage.set(this.key, newList);
    this.storage.get(this.key).then((val) => {
      console.log('El producto de las listas es', val);
    });

    this.pages.push({ shop: newList, component: SuperListPage })


    // this.myApp.pages.push({ title: 'ASD', component: ListPage });
  }

  getShoppingLists(): void {
    // this.listShoppingProvider.getShoppingLists()
    // .subscribe(shoppingLists => this.shoppingLists = shoppingLists);
    console.log('TODO getShoppingLists');
  }

  ionViewDidLoad() {
    console.log("load app");
    console.log(this.shops);
    this.shops.push(
      {
        name: 'zzzz',
        date: "03/25/2015",
        products: [
          { name: 'd', price: '10' },
          { name: 'sdf', price: '12' },
          { name: 'dsf', price: '33' }
        ]
      }
    );
    console.log(this.shops);
  }

  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
  }

  openPage(shopIndex) {
    console.log(shopIndex);
    console.log(this.pages[shopIndex].component);
    this.navCtrl.push(this.pages[shopIndex].component);
  }

  // openNavDetailsPage(item) {
  //   this.nav.push(NavigationDetailsPage, { item: item });
  // }

}
