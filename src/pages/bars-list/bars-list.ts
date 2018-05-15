import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { ResBarDetailsPage } from "../res-bar-details/res-bar-details";

/**
 * Generated class for the BarsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-bars-list',
  templateUrl: 'bars-list.html',
})
export class BarsListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav:Nav) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarsListPage');
  }

  barDetails(){
    this.nav.push(ResBarDetailsPage,{type:'bar'});
  }

}
