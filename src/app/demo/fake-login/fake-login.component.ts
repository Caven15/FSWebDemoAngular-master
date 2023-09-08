import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeAuthService } from 'src/app/shared/services/fake-auth.service';

@Component({
  selector: 'app-fake-login',
  templateUrl: './fake-login.component.html',
  styleUrls: ['./fake-login.component.scss']
})
export class FakeLoginComponent {

  loginForm! : FormGroup

  constructor(
    private _nomFormBuilder : FormBuilder,
    private _nomFakeAuth : FakeAuthService,
    private _nomRouter : Router
    ){}

  ngOnInit(){
    this.loginForm = this._nomFormBuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  }
  // à la validation du formulaire
  onSubmit(){
    const form = this.loginForm.value
    this._nomFakeAuth.fakeLogin(form['email'])
    this._nomRouter.navigate(['demo-guard'])
  }
}
