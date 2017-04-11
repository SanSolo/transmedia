import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }  from './app.component';
import {EmailComponent } from './email/email.component';
import {ImgComponent } from './scene/img.component';
import {TxtComponent } from './scene/txt.component';
@NgModule({
  imports:      [ BrowserModule , NgbModule.forRoot() ],
  declarations: [ AppComponent, EmailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
