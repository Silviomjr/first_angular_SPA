import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  showPersonal: boolean = false;
  showProfessional: boolean = false;
  showHobbies: boolean = false;
  showButton: boolean = false;
  showMainContent: boolean = true;


  ngOnInit(): void {
  }
  
  showingPersonal () {
    this.showPersonal = true;
    this.showProfessional = false;
    this.showHobbies = false;
    this.showButton = true;
    this.showMainContent = false;

  }

  showingProfessional () {
    this.showPersonal = false;
    this.showProfessional = true;
    this.showHobbies = false;
    this.showButton = true;
    this.showMainContent = false;


  }

  showingHobbies () {
    this.showPersonal = false;
    this.showProfessional = false;
    this.showHobbies = true;  
    this.showButton = true;
    this.showMainContent = false;


  }

  hideCards () {
    this.showPersonal = false;
    this.showProfessional = false;
    this.showHobbies = false;
    this.showButton = false;
    this.showMainContent = true;


  }

}

