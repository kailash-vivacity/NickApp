import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { ResBarDetailsPage } from "../res-bar-details/res-bar-details";

/**
 * Generated class for the RestaurentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-restaurent-list',
  templateUrl: 'restaurent-list.html',
})
export class RestaurentListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav:Nav) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurentListPage');
  }
  restaurentDetails(){
    this.nav.push(ResBarDetailsPage, {type:'res'});
  }

}
