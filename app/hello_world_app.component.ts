import {Component, View} from "angular2/core";

@Component({
   selector: 'my-app'
})

@View({
  templateUrl: 'app/home/home_component.html',
  styleUrls: ['app/home/home_component.css']
})

export class MyHelloWorldClass {
	public name : string = "Reddy_Uppathi"
}