import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {from, Observable} from "rxjs";
import {assign} from "lodash";

@Injectable({
  providedIn: 'root'
})
export class MuseumServive {
  private baseURL: string = environment.API_URL;
  private key: string = environment.API_KEY
  private results: any[] = [];

  constructor() {

  }

  query(filters: { [key: string]: string }): Observable<Array<any>> {
    //assign combines the key and filters together in a 1 queary Obj
    const queryObj = assign({key: this.key}, filters);
    //creates the url
    const fetchURl = this.baseURL + new URLSearchParams(queryObj);
    console.log(fetchURl);
    return from(
      fetch(fetchURl, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      }).then((response) => response.json()).then((data) => {
        if (data.artObjects == undefined) {
          return [];
        } else {
          console.log(data.artObjects)
          this.results = data.artObjects;
          return data.artObjects;
        }
      })
    );
  }

  findById(id: string) {
    //looking for a certain artobject within the results.
    for (let i = 0; i < this.results.length; i++) {
      if (this.results[i].objectNumber == id) {
        return this.results[i];
      }
    }
    return null;
  }


}
