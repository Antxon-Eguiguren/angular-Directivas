import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  arrPersonas: Persona[];

  constructor() {
    this.arrPersonas = [
      new Persona('Antxon', 'Eguiguren', 34, 'Juan de Dios, 1, 4A'),
      new Persona('Julia', 'Besada', 32, 'Juan de Dios, 1, 4A'),
      new Persona('Jorge', 'Torroglosa', 26, 'Juan de Dios, 1, 4A'),
      new Persona('Aitziber', 'Redondo', 30, 'Juan de Dios, 1, 4A')
    ];
  }

  ngOnInit() {
  }

}
