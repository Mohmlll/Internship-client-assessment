import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MuseumServive {
  private key: string = environment.API_KEY

  constructor(private http: HttpClient) {


  }

  test() {
    let params = new HttpParams();
    params.append("key", this.key)
    // params.append("involvedMaker", "Rembrandt van Rijn")
    console.log("something")
    //Http request-
    this.http.get(`https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=${this.key}`, {
      // params: params
    }).subscribe((response) => {
      console.log(response)
    })

    // console.log(data)

    //let url = "https://www.rijksmuseum.nl/api/nl/collection?key=api/"
    //this.apiData = this.http.get(url);
  }

}
