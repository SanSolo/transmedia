import { NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }  from './app.component';
import { EmailComponent } from './email/email.component';
import { SceneComponent } from './scene/scene.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {ToasterModule, ToasterService} from 'angular2-toaster';


import { appRouting } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot(), appRouting, FormsModule, ReactiveFormsModule, HttpModule, JsonpModule, ToasterModule],
  declarations: [ AppComponent, EmailComponent, SceneComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
