import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MuseumServive {
  private key: string = environment.API_KEY

  constructor(private http: HttpClient) {


  }
  getAll(): Observable<any> {
    return  this.http.get(`https://www.rijksmuseum.nl/api/en/collection/?key=${this.key}`);
  }

  getFilterdData(params: HttpParams| undefined): Observable<any> {
   return  this.http.get('https://www.rijksmuseum.nl/api/en/collection', {params: params});
  }

}
