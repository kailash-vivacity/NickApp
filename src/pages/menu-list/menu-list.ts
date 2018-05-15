import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { FoodDetailsPage } from "../food-details/food-details";

/**
 * Generated class for the MenuListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-list',
  templateUrl: 'menu-list.html',
})
export class MenuListPage {

  private menuList:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav:Nav) {
  }

  ionViewDidLoad() {
    this.menuList = ['Patty Melt','Greek Burger','Philly Burger','Texas Burger','Matzo Burger','Brunch Burger','Italian Burger',
    'Hawaiin Burger','Cuban Burger'];
    console.log('ionViewDidLoad MenuListPage');
  }
  openFoodDetails(foodNAme:any){
    this.nav.push(FoodDetailsPage,{"foodName":foodNAme});
  }

}
