import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CameraTabDefaultPagePage } from '../pages/camera-tab-default-page/camera-tab-default-page';
import { CartTabDefaultPagePage } from '../pages/cart-tab-default-page/cart-tab-default-page';
import { CloudTabDefaultPagePage } from '../pages/cloud-tab-default-page/cloud-tab-default-page';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { Tab4DefaultPagePage } from '../pages/tab4default-page/tab4default-page';
import { RestaurantsPage } from '../pages/restaurants/restaurants';
import { RestaurentListPage } from "../pages/restaurent-list/restaurent-list";
import { BarsListPage } from "../pages/bars-list/bars-list";
import  { ResBarDetailsPage } from "../pages/res-bar-details/res-bar-details";
import { ResBarMenuPage} from "../pages/res-bar-menu/res-bar-menu";
import { FoodDetailsPage } from "../pages/food-details/food-details";
import { MenuListPage } from "../pages/menu-list/menu-list";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    CameraTabDefaultPagePage,
    CartTabDefaultPagePage,
    CloudTabDefaultPagePage,
    TabsControllerPage,
    Tab4DefaultPagePage,
    RestaurantsPage,
    RestaurentListPage,
    BarsListPage,
    ResBarDetailsPage,
    ResBarMenuPage,
    FoodDetailsPage,
    MenuListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CameraTabDefaultPagePage,
    CartTabDefaultPagePage,
    CloudTabDefaultPagePage,
    TabsControllerPage,
    Tab4DefaultPagePage,
    RestaurantsPage,
    RestaurentListPage,
    BarsListPage,
    ResBarDetailsPage,
    ResBarMenuPage,
    FoodDetailsPage,
    MenuListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
