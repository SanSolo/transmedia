import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from './validator';

@Component ({
  selector:'email-page',
  templateUrl: './email.template.html'
})

export class EmailComponent {
  emailRegex = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}";
  complexForm: FormGroup;
  constructor(fb: FormBuilder){
    this.complexForm = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.pattern(this.emailRegex)])],
      'nom': [null, Validators.compose([Validators.required,Validators.minLength(3)])],
      'prenom': [null, Validators.compose([Validators.required,Validators.minLength(3)])]
    })
  }
  submitForm(value: any):void{
    console.log('Reactive Form Data: ');
    console.log(value);
  }
}
