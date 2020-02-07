import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  estilosParrafo: any;
  mostrar: boolean;

  constructor() {
    this.estilosParrafo = {
      color: 'green',
      fontSize: '2em',
    };
    this.mostrar = true;
  }

  manejarClick() {
    this.estilosParrafo.backgroundColor = 'yellow';
    this.mostrar = !this.mostrar;
  }

  // manejarCambioColor($event) {
  //   this.estilosParrafo.backgroundColor = $event.target.value;
  // }

  manejarTamano($event) {
    this.estilosParrafo.fontSize = `${$event.target.value}px`;
  }
}
