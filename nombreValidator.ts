ts
import { AbstractControl, ValidationErrors } from '@angular/forms';

export function nombreValidator(regex: RegExp) {
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = regex.test(control.value);
    return valid ? null : { nombreInvalido: true };
  };
}
