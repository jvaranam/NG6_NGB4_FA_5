import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crousel',
  templateUrl: './crousel.component.html',
  styleUrls: ['./crousel.component.css']
})
export class CrouselComponent implements OnInit {

	public images:Array<string>;

  constructor() { }

  ngOnInit() {
  	//this.images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  	this.images = ["./assets/img/vision.jpg","./assets/img/mission.jpg","./assets/img/strategy.jpg"]
  }

}
