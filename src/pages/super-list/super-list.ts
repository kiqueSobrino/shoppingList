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
    this.storage.forEach((value, key, index) => {
      if (key == this.storageListKey) {
        console.log(value);
        this.storage.get(key).then((val) => {
          this.products = val[this.listIndex].products;
        })
          .catch((error) => {
            console.log('Error initializeApp', error);
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


  updateCheck(e, item, i) {
    // this.storage.set('name', 'Max');
    //debugger
    // this.products[i].checked = this.check;
    console.log(item);
    console.log(i);
    console.log(this.shop);
    console.log(e.checked);

    // this.storage.set('Listas', [     
    //   {
    //      nombre: 'sdf', estado: e.checked
    //   }
    // ]);

    // console.log(this.storage.get('Listas'));

    //this.shop.products[i].checked 
        

    this.storage.set(this.storageListKey,[
      {
        id: 0,
        name: 'Super',
        date: "03/25/2015",
        products: [
          { name: 'Patatas', price: 10, qtty: 3, checked: true },
          { name: 'Manzanas', price: 12, qtty: 1, checked: true },
          { name: 'Pescado', price: 33, qtty: 1, checked: false }
        ]
      },
      {
        id: 1,
        name: 'Mercadillo',
        date: "03/25/2015",
        products: [
          { name: 'Lechuga', price: 11, qtty: 1, checked: true },
          { name: 'Camisetas', price: 40, qtty: 1, checked: false },
          { name: 'Calcetines', price: 1, qtty: 1, checked: false }
        ]
      },
      {
        id: 2,
        name: 'Todo a 100',
        date: "03/25/2015",
        products: [
          { name: 'Pilas', price: 1, qtty: 1, checked: false },
          { name: 'Cartulinas', price: 1, qtty: 1, checked: true },
          { name: 'Papel de regalo', price: 1, qtty: 1, checked: true },
          { name: 'Celo', price: 1, qtty: 1, checked: false }
        ]
      }
    ]);


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
