import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';

import { SHOPPINGLISTS } from '../../app/mock-lists';

import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-super-list',
  templateUrl: 'super-list.html',
})
export class SuperListPage {

  storageListKey: string = 'Lists';
  storageList: any;
  listIndex: number = 0;
  check: boolean;

  shoppingLists = SHOPPINGLISTS;
  shop = SHOPPINGLISTS[this.listIndex];
  shopName = this.shop.name;
  shopDate = this.shop.date;
  products: any; // set in ionViewDidLoad() method
  // products = this.shop.products;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public modalCtrl: ModalController,
    private storage: Storage
  ) { }

  ionViewDidLoad() {
    // check if storageList already exists, if not, set the origin mock-list data
    this.storage.length().then(result => {
      if (result > 0) {
        this.setData();
      }else{
        this.products = this.shop.products;
      }
    })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }

  setData() {
    this.storage.forEach((value, key, index) => {
      if (key == this.storageListKey) {
        this.storage.get(key).then((val) => {
          this.products = val[this.listIndex].products;
        })
          .catch((error) => {
            console.log('Error: ', error);
          });
      }
      else {
        this.products = this.shop.products;
      }
    });
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


  updateCheck(e, i) {
    // Update product
    this.shop.products[i].checked = e.checked;
    // Set it in storage
    this.storage.set(this.storageListKey, this.shoppingLists);
  }

  deleteItem(item, i) {
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
            if (this.products[i] == item) {
              this.products.splice(i, 1);
            }
          }
        }
      ]
    });
    alert.present();
  }

  editQtty(item, i) {
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
            if (this.products[i] == item) {
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
