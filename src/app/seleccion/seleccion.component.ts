import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit {

  puertaConNgModel: string;
  puertaConBoton: string;

  constructor() {
    this.puertaConNgModel = '';
    this.puertaConBoton = '';
  }

  ngOnInit() {
  }

  manejarClick(pPuerta) {
    if (pPuerta === 1) {
      this.puertaConBoton = 'uno';
    } else if (pPuerta === 2) {
      this.puertaConBoton = 'dos';
    } else {
      this.puertaConBoton = 'tres';
    }
  }

}
