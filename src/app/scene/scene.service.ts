import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Scene } from './scene';

@Injectable()

export class SceneService {
  private scenesUrl = 'http://daro.kietumedia.ch/wp-json/wp/v2/posts';  // URL to web API
  constructor (private http: Http) {}

  getScenes(): Observable<Scene[]> {
    return this.http.get(this.scenesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  getScenesById(sceneId: string): Observable<Scene>{
    this.scenesUrl += '/' + sceneId + '?_embed';
    return this.http.get(this.scenesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);         
  }


  private extractData(res: Response) {
    let body = res.json();
    return body || { };
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

    /*

  private mapScenes(response:Response): Scene[]{
   // The response of the API has a results
   // property with the actual results
     return response.json().results.map(this.toScene)
  }

  private toScene(r:any): Scene{
    let scene = <Scene>({
      id: r.id,
    });
  console.log('Parsed scene:', scene);
  return scene;
  }
  */
}

/*
  private heroesUrl = 'app/heroes.json'; // URL to JSON file
*/
