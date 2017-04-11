import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }  from './app.component';
import { EmailComponent } from './email/email.component';
import { appRouting } from './app.routing';

@NgModule({
  imports:      [ BrowserModule , NgbModule.forRoot(), appRouting ],
  declarations: [ AppComponent, EmailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
