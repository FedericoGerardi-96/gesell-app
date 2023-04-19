import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  validarFormulario() {
    if (
      this.emailFormControl.status === 'VALID' &&
      this.passwordFormControl.status === 'VALID'
    ) {
      return false;
    }
    return true;
  }

  matcher = new MyErrorStateMatcher();

  constructor(private _router: Router, private _userServices: UserService) {}

  async logIn() {
    const ok = await this._userServices.firebaseLogIn(
      this.emailFormControl.value!,
      this.passwordFormControl.value!
    );

    if (ok) {
      this._router.navigate(['./home']);
      return;
    }
  }
}
