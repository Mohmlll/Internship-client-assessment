import {Component, OnInit} from '@angular/core';
import {MuseumServive} from "../../service/museum-servive";
import {environment} from "../../../environments/environment";
import {HttpParams} from "@angular/common/http";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  search: string | undefined;
  name: string | undefined;
  role: string | undefined;
  title: string | undefined;
  material: string | undefined;
  technique: string | undefined;
  objectnumber: string | undefined;
  startYear: number | undefined;
  endYear: number | undefined;
  key: string = environment.API_KEY;

  constructor(private service: MuseumServive) {
  }


  ngOnInit(): void {
  console.log( this.service.getAll())
  }

  getData() {
    let params = new HttpParams();
    params.append("key", this.key)
    console.log(this.search)
    if (this.search != null) {
      params.append("involvedMaker", this.search)
    }
    let coll = this.service.getFilterdData(params);
    coll.subscribe(data => {
      console.log(data)
    })
  }

}
