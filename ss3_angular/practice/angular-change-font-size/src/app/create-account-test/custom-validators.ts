// tslint:disable-next-line:no-empty-interface
import {AbstractControl, ValidationErrors, Validators} from '@angular/forms';

export class CustomValidators {
  // tslint:disable-next-line:ban-types
  // @ts-ignore
  // tslint:disable-next-line:align ban-types
  static MatchValidator(source: String, target: String): Validators {
    // @ts-ignore
    return (control: AbstractControl): ValidationErrors | null => {
      // @ts-ignore
      const sourceCtrl = control.get(source);
      // @ts-ignore
      const targetCrl = control.get(target);
      return sourceCtrl && targetCrl && sourceCtrl.value !== targetCrl.value ? { mismatch: true } : null;

};
}
}
