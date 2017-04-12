import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component ({
  selector:'email-page',
  templateUrl: './email.template.html'
})

export class EmailComponent {
  complexForm: FormGroup;
  constructor(fb: FormBuilder){
    this.complexForm = fb.group({
      'email':'',
      'nom':'',
      'prenom':''
    })
  }
  submitForm(value: any):void{
    console.log('Reactive Form Data: ');
    console.log(value);
  }
}
