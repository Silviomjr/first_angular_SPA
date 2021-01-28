import { Component, OnInit } from '@angular/core';
import { professional } from '../model/professional'
 
@Component({
  selector: 'spa-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  

  professionalList: professional[] = [
    {
      workplace: 'Undefined',
      role: 'Desenvolvedor Web',
      tasks: 'Fazer os melhores aplicativos web que o mundo já viu =).',
      date: 'Mar-2020 até ...(?)'
    },
    {
      workplace: 'Segula Technologies',
      role: 'Analista de Projetos',
      tasks: 'Implantação de equipamentos para indústria automobilística em linha de montagem.',
      date: 'Jan-2017 a Fev-2020'
    },
    {
      workplace: 'Bemis Latin America',
      role: 'Product Intership',
      tasks: 'Impressão 3D de mock-ups de novas embalagens.',
      date: 'Fev-2015 a Fev-2016' 
    }
    
  ];

}
