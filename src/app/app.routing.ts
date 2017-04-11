import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmailComponent } from './email/email.component';
import {TxtComponent } from './scene/txt.component';
import {AppComponent } from './app.component';
const appRoutes: Routes = [
  {path: '', component: AppComponent},
  { path: 'mail', component: EmailComponent},
  { path: 'txt', component: TxtComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
