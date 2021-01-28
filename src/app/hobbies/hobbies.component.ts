import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  listHobbies = [
    "Jogar bola",
    "Ler",
    "Carros",
    "Jogos de videogame",
    "Meus totós:"  
  ];
  
  
}
