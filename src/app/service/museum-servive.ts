import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {from, Observable} from "rxjs";
import {assign} from "lodash";

@Injectable({
  providedIn: 'root'
})
export class MuseumServive {
  private key: string = environment.API_KEY
  baseURL: string = environment.API_URL;

  constructor() {


  }


  query(filters: { [key: string]: string }): Observable<any> {
    const queryObj = assign({ key: this.key }, filters);
    const fetchURl = this.baseURL + new URLSearchParams(queryObj);
    console.log(fetchURl);
    return from(
      fetch(fetchURl, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      }).then((response) => response.json())
    );
  }

}
