import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
height: number;
  weight: number;
  gender: string;
  age: number;
  calorie: number;
  caloriemsg: string;
  lifestyle: string;
  constructor(public navCtrl: NavController) {

  }
computecalorie() {
if (this.gender = "m")  {
this.calorie = (10*this.weight) + (6.25*this.height) - (5*this.age+5);

}else if (this.gender = "f")  {
this.calorie = (10*this.weight) + (6.25*this.height) - (5*this.age-161);

}else {
this.caloriemsg = "Invalid";

if (this.lifestyle = "1")  {
this.calorie = ((10*this.weight) + ((6.25*this.height) - (5*this.age+5)*1.2));

}else if (this.lifestyle = "2")  {
this.calorie = ((10*this.weight) + ((6.25*this.height) - (5*this.age+5)*1.4));

}else if (this.lifestyle = "3")  {
this.calorie = ((10*this.weight) + ((6.25*this.height) - (5*this.age+5)*1.6));

}else if (this.lifestyle = "4")  {
this.calorie = ((10*this.weight) + ((6.25*this.height) - (5*this.age+5))*1.75);

}else if (this.lifestyle = "5")  {
this.calorie = ((10*this.weight) + ((6.25*this.height) - (5*this.age+5))*2.0);

}else if (this.lifestyle = "6")  {
this.calorie = ((10*this.weight) + ((6.25*this.height) - (5*this.age+5))*2.3);

}else {
this.caloriemsg = "Invalid";

}







}

}
}