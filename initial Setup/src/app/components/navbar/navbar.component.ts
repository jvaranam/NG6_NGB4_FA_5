import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	public navbarOpen:boolean = false;
isNavbarCollapsed=true;
isNavbarCollapsed1=true;


	constructor() { }

	ngOnInit() {
	}

	public onLogo() {
		console.log("on Logo");
	}

	public onToggleNavbar() {
		this.navbarOpen = !this.navbarOpen;
	}

}
