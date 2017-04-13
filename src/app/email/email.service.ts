// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Email }           from './model/email';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmailService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private emailsUrl = 'https://us15.api.mailchimp.com/3.0/lists/eb7b58de02/members';

     // Fetch all existing comments
     getComments() : Observable<Email[]> {

         // ...using get request
         return this.http.get(this.emailsUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

     addComment (body: Object): Observable<Email[]> {
       let bodyString = JSON.stringify(body); // Stringify payload
       let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
       let options       = new RequestOptions({ headers: headers }); // Create a request option
       console.log('coucou');
       return this.http.post(this.emailsUrl, body, options) // ...using post request
                        .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
   }

}
