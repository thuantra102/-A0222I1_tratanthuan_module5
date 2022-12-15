import {FormGroup} from '@angular/forms';

export class ConfirmedValidator {
  // tslint:disable-next-line:ban-types
  static confirm(pass: String, confirm: String, form: any) {
   // @ts-ignore
    const passControl = form.controls[pass];
    // @ts-ignore
    const  confirmControl = form.controls[confirm];
    if (passControl.value !== confirmControl.value) {
      confirmControl.setErrors({confirmValidator: true});
    }
  }


}
