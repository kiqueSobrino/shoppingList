import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';

import { ShoppingList } from '../../app/shopping-list';
import { LISTS } from '../../app/mock-lists';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lists = LISTS;  
  users: any[] = [];

  key: string = 'Lists';
  name: string = 'Lista sin nombre';

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

   }

  addList(newList) {
    //this.storage.set(this.key, { name: newList });
    this.storage.set(this.key, newList);
    this.storage.get(this.key).then((val) => {
      console.log('El producto de las listas es', val);
    });

    // this.myApp.pages.push({ title: 'ASD', component: ListPage });
  }

  getShoppingLists(): void {
    // this.listShoppingProvider.getShoppingLists()
    // .subscribe(shoppingLists => this.shoppingLists = shoppingLists);
    console.log('TODO');
  }

  ionViewDidLoad() {
    console.log("load app");
  }

  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
  }

}
