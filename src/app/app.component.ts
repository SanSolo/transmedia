import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><p>
  <ngb-alert [dismissible]="false">
    <strong>Warning!</strong> Better check yourself, you're not looking too good.
  </ngb-alert>
</p>`,
})
export class AppComponent  { name = 'Angular'; }
