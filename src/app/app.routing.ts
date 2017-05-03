import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmailComponent } from './email/email.component';
import {SceneComponent} from './scene/scene.component';
import {AppComponent } from './app.component';
const appRoutes: Routes = [
  { path: '', component: AppComponent},
  { path: 'mail', component: EmailComponent},
  { path: 'scene', component: SceneComponent},
  { path: 'mailchimp', redirectTo: ''}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
