import {Component, OnInit} from '@angular/core';
import {MuseumServive} from '../../service/museum-servive';
import {isUndefined, omitBy} from 'lodash/';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  search: string | undefined;
  name: string | undefined;
  material: string | undefined;
  technique: string | undefined;
  objectnumber: string | undefined;

  selectedObjectId: string = `-1`;

  artObjects: any[] | undefined;

  constructor(private service: MuseumServive, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.filterObjects();
  }

  onSelect(oId: string) {
    this.selectedObjectId = oId;
    console.log(oId);
    this.router.navigate([oId], {relativeTo: this.activatedRoute});
  }

  filterObjects() {
    const filters: {} = omitBy(
      // Object won't have any undefined keys
      {
        q: this.search,
        involvedMaker: this.name,
        material: this.material,
        technique: this.technique,
        objectnumber: this.objectnumber,
      },
      isUndefined
    );
    this.service.query(filters).subscribe((data) => {
      this.artObjects = data.artObjects;
      console.log(this.artObjects)
    });
  }


}
