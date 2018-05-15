import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FoodDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food-details',
  templateUrl: 'food-details.html',
})
export class FoodDetailsPage {

  private slideImges:any;
  private getFoodName:any;
  private ingriedients:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getFoodName = navParams.data.foodName;
  }

  ionViewDidLoad() {
    this.ingriedients = [{img:'in1.jpg',name:'Soy'},{img:'in2.jpg',name:'Milk'},{img:'in3.jpg',name:'Wheat'},{img:'in4.jpg',name:'Eggs'},{img:'in5.jpg',name:'Sesame'},{img:'in6.jpg',name:'Salt'}];
    this.slideImges = ['1.jpg','2.jpg','3.jpg','4.jpg'];
    console.log('ionViewDidLoad FoodDetailsPage');
  }

}
