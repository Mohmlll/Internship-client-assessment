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
  public search: string | undefined;
  public name: string | undefined;
  public objectnumber: string | undefined;
  public artObjects: Observable<Array<any>>;

  constructor(private service: MuseumServive, private activatedRoute: ActivatedRoute, private router: Router) {
    //default collection load
    //ombitBy checks if the variables are undefined or not, if they are not they are added to filters
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

  onSelect(oId: string) {
    console.log(oId);
    this.router.navigate([oId], {relativeTo: this.activatedRoute});
  }

  getFilterdObj() {
    //filters within collection
    const filters: {} = omitBy(
      {
        q: this.search,
        involvedMaker: this.name,
        objectnumber: this.objectnumber
      },
      isUndefined
    );
    //sends queary with filter requirements if not undefined
    this.artObjects = this.service.query(filters);
  }

}
