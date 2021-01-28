import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})

@Input()

export class PersonalComponent implements OnInit {

  constructor() { }
  
  hidePersonal: boolean;

  ngOnInit(): void {
  }

  
}
