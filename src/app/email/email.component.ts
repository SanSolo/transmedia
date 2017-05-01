import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Email } from './model/email';
import { EmailService } from './email.service';
import {Observable} from 'rxjs/Rx';

@Component ({
  selector:'email-page',
  templateUrl: './email.template.html',
  providers: [EmailService]
})

export class EmailComponent {
  emailRegex = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}";
  complexForm: FormGroup;
  private errorMessage ='';
  private results: Email[];
  model = new Email('','','');
  constructor(fb: FormBuilder, private myService:EmailService, private router: Router){
    this.complexForm = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.pattern(this.emailRegex)])],
      'nom': [null, Validators.compose([Validators.required,Validators.minLength(3)])],
      'prenom': [null, Validators.compose([Validators.required,Validators.minLength(3)])]
    })
  }
  submitForm(value: any):void{
    let emailOperation:Observable<Email[]>;
    this.model.nom = value.nom;
    this.model.prenom = value.prenom;
    this.model.email = value.email;
    this.addEmail(this.model.email, this.model.prenom, this.model.nom);
    //console.log(this.myService.addComment(this.model));
    console.log('Reactive Form Data: ');
    console.log(value);
  }

  addEmail(adresse: string, prenom: string, nom: string) {
   if (!adresse) { return; }
   if (!nom) { return; }
   if (!prenom) { return; }
   this.myService.registerEmail(adresse, prenom, nom)
                    .subscribe(
                      test  => this.results = test,
                      error =>  this.errorMessage = <any>error,
                      () => this.goToScene())
 }

 goToScene(){
   console.log('goToScene');
   this.router.navigate(["/scene"]);
 }
}
