import { Component } from '@angular/core';
import { NavController,Nav } from 'ionic-angular';
import { RestaurentListPage } from '../restaurent-list/restaurent-list';
import { BarsListPage } from "../bars-list/bars-list";

@Component({
  selector: 'page-camera-tab-default-page',
  templateUrl: 'camera-tab-default-page.html'
})
export class CameraTabDefaultPagePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController,public nav:Nav) {
  }
  openRestuarants()
  {
    this.nav.push(RestaurentListPage)
  }

  openBars(){
    this.nav.push(BarsListPage);
  }

}
