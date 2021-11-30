import {Component, OnInit} from '@angular/core';
import {MuseumServive} from '../../service/museum-servive';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {isUndefined, omitBy} from "lodash";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  search: string | undefined;
  name: string | undefined;
  objectnumber: string | undefined;

  selectedObjectId: string = `-1`;

  artObjects: Observable<Array<any>>;

  constructor(private service: MuseumServive, private activatedRoute: ActivatedRoute, private router: Router) {
    const filters: {} = omitBy(
      {
        q: this.search,
        involvedMaker: this.name,
        objectnumber: this.objectnumber
      },
      isUndefined
    );
    this.artObjects = this.service.query(filters);
  }

  ngOnInit(): void {

  }

  onSelect(oId: string, obj: any) {
    this.selectedObjectId = oId;
    console.log(oId);
    this.router.navigate([oId], {relativeTo: this.activatedRoute});
  }

  isNotNull(): boolean {
    return this.selectedObjectId == null;
  }

  getFilterdObj() {
    const filters: {} = omitBy(
      {
        q: this.search,
        involvedMaker: this.name,

        objectnumber: this.objectnumber
      },
      isUndefined
    );
    this.artObjects = this.service.query(filters);
  }

}
