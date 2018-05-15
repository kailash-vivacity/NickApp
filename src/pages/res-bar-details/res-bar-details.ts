import { Component } from '@angular/core';
import {NavController, NavParams, Platform, Nav} from 'ionic-angular';
import { ResBarMenuPage } from "../res-bar-menu/res-bar-menu";

/**
 * Generated class for the ResBarDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-res-bar-details',
  templateUrl: 'res-bar-details.html',
})
export class ResBarDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform:Platform, public nav:Nav) {
  }

  ionViewDidLoad() {
    // console.log(this.platform);
  }
  openMenu(){
    this.nav.push(ResBarMenuPage);
  }

}
