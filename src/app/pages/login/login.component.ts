import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonDefaultComponent } from '../../components/button-default/button-default.component';
import { ButtonModule } from 'primeng/button';
import { ButtonDefaulWhiteComponent } from '../../components/button-defaul-white/button-defaul-white.component';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    // MatCardModule,
    FormsModule,
    InputTextModule,
    InputGroupAddonModule,
    InputGroupModule,
    // CardModule,
    // IconFieldModule,
    // InputIconModule,
    ButtonDefaultComponent,
    ButtonDefaulWhiteComponent,
    ButtonModule,
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {}

  navigate() {
    this.router.navigate(["/register"])
  }
}
