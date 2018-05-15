import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { MenuListPage } from "../menu-list/menu-list";

/**
 * Generated class for the ResBarMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-res-bar-menu',
  templateUrl: 'res-bar-menu.html',
})
export class ResBarMenuPage {

  private foodMenu:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public nav:Nav) {
  }

  ionViewDidLoad() {
    this.foodMenu = ['Appetizers','Salads','Soup','Burgers','Sandwiches','Steaks','Seafood','Wraps','Breakfast'];
    console.log('ionViewDidLoad ResBarMenuPage');
  }
openMenuList(){
    this.nav.push(MenuListPage);
}

}
