import { Validators, FormGroup, FormControl } from '@angular/forms';

export class UserInfo {
  fullname: string;
  username: string;
  email: string;

  createFormGroup() {
    return new FormGroup({
      fullname: new FormControl('', [Validators.required, Validators.minLength(2), , Validators.maxLength(200)]),
      username: new FormControl(),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
}

export class PasswordInfo {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;

  createFormGroup() {
    return new FormGroup({
      currentPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', this.passwordValidations()),
      newPasswordConfirmation: new FormControl('', this.passwordValidations()),
    }, [this.matchingPasswords('newPassword', 'newPasswordConfirmation')]);
  }

  private passwordValidations() {
    return [Validators.required, Validators.minLength(8)];
  }

  matchingPasswords(newPassword: string, newPasswordConfirmation: string) {
    return (group: FormGroup): {[key: string]: any} => {
      if (group.get(newPasswordConfirmation).touched
        && group.controls[newPassword].value !== group.controls[newPasswordConfirmation].value) {
        return {
          [newPasswordConfirmation]: {
            mismatchedPasswords: true
          }
        };
      }
    };
  }
}
