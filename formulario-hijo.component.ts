ts
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nombreValidator } from './nombreValidator';

@Component({
  selector: 'app-formulario-hijo',
  templateUrl: './formulario-hijo.component.html'
})
export class FormularioHijoComponent {
  @Output() enviar = new EventEmitter<any>();
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, nombreValidator(/angular/i)]],
      edad: ['', Validators.required]
    });
  }

  submit() {
    if (this.formulario.valid) {
      this.enviar.emit(this.formulario.value);
      this.formulario.reset();
    }
  }
}
