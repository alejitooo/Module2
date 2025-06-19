ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-padre',
  template: `
    <div class="container">
      <h3>Formulario Padre</h3>
      <app-formulario-hijo (enviar)="procesar($event)"></app-formulario-hijo>
      <pre>{{ datos | json }}</pre>
    </div>
  `
})
export class FormularioPadreComponent {
  datos: any;

  procesar(valor: any) {
    this.datos = valor;
  }
}
