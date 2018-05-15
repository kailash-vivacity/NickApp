import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraTabDefaultPagePage } from '../camera-tab-default-page/camera-tab-default-page';
import { CartTabDefaultPagePage } from '../cart-tab-default-page/cart-tab-default-page';
import { CloudTabDefaultPagePage } from '../cloud-tab-default-page/cloud-tab-default-page';
import { Tab4DefaultPagePage } from '../tab4default-page/tab4default-page';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CameraTabDefaultPagePage;
  tab2Root: any = CartTabDefaultPagePage;
  tab3Root: any = CloudTabDefaultPagePage;
  tab4Root: any = Tab4DefaultPagePage;
  constructor(public navCtrl: NavController) {
  }
  
}
