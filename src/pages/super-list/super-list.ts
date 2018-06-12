import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController} from 'ionic-angular';

import { SHOPPINGLISTS } from '../../app/mock-lists';


@IonicPage()
@Component({
  selector: 'page-super-list',
  templateUrl: 'super-list.html',
})
export class SuperListPage {

  check: boolean;

  shop = SHOPPINGLISTS[0];
  shopName = this.shop.name;
  shopDate = this.shop.date;
  products = this.shop.products;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
  }

  addItem() {
    // let addModal = this.modalCtrl.create('ItemCreatePage');
    // addModal.onDidDismiss(item => {
    //   if (item) {
    //     // this.items.add(item);
    //   }
    // })
    // addModal.present();
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }


  updateCheck(item, i) {
    // this.storage.set('name', 'Max');
    //debugger
    this.products[i].checked = this.check;
    console.log('Cucumbers new state:' + this.check);
  }

  deleteItem(item, i){
    let alert = this.alertCtrl.create({
      title: 'Confirmar elminar producto',
      message: '¿Quieres eliminar este producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            if(this.products[i] == item){
              this.products.splice(i, 1);
            }
          }
        }
      ]
    });
    alert.present();
  }

  editQtty(item, i){
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'qtty',
          placeholder: 'Cantidad'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            if(this.products[i] == item){
              console.log(data.qtty);
              console.log(this.products[i].qtty);
              this.products[i].qtty == data.qtty;
              item.qtty == data.qtty;
            }
          }
        }
      ]
    });
    alert.present();
  }
}
