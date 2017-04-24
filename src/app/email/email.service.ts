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
     private apiKey = '061820fb1a77e6b6e3efbbd6e815c3ff-us15';
     private apiUser = 'Comem';


     // Fetch all existing comments
     getComments() : Observable<Email[]> {

         // ...using get request
         return this.http.get(this.emailsUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
private extractData(res: Response) {
  let body = res.json();
  return body.data || { };
}
private handleError (error: Response | any) {
  // In a real world app, you might use a remote logging infrastructure
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}

     addComment(body: Object): Observable<Email[]> {
       let bodyString = JSON.stringify(body); // Stringify payload
       console.log(bodyString);
       let data = {
         "email_address": body,
         "status": "subscribed",
         "merge_fields": {
           "FNAME": body,
           "LNAME": body
         }
       }
       let headers      = new Headers(); // ... Set content type to JSON
       headers.append("Authorization", "Basic " + btoa('prout' + ":" + this.apiKey));
       headers.append("Content-Type", "application/json");
       let options       = new RequestOptions({ headers: headers }); // Create a request option
       return this.http.post(this.emailsUrl, data, options)
                    .map(this.extractData)
                    .catch(this.handleError);
   }


}
