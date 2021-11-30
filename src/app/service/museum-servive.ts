import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {from, Observable} from "rxjs";
import {assign, isUndefined, omitBy} from "lodash";

@Injectable({
  providedIn: 'root'
})
export class MuseumServive {
  private key: string = environment.API_KEY
  baseURL: string = environment.API_URL;
  private _results: any[] = [];

  constructor() {
    this.getFilterdObj(undefined, undefined, undefined, undefined, undefined)
  }

 getFilterdObj(objectNumber: string | undefined, technique: string | undefined, name: string | undefined, search: string | undefined, material: string | undefined)  {
    const filters: {} = omitBy(
      {
        q: search,
        involvedMaker: name,
        material: material,
        technique: technique,
        objectnumber: objectNumber
      },
      isUndefined
    );
    this.query(filters).subscribe((data) => {
      if (data.artObjects == undefined){
        this._results = [];
      } else {
        this._results = data.artObjects;
        console.log(this._results)
      }
    })
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

  get results(): any[] {
    return this._results;
  }

  findById(id: string){
    for (let i = 0; i < this._results.length; i++) {
      if (this._results[i].objectNumber == id) {
        return this._results[i];
      }
    }
    return null;
  }


}
