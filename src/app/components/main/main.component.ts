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

  artObjects: any[] = [];

  constructor(private service: MuseumServive, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.artObjects = this.service.results;
  }

  onSelect(oId: string, obj: any) {
    this.selectedObjectId = oId;
    console.log(oId);
    this.router.navigate([oId], {relativeTo: this.activatedRoute});
  }

  isNotNull(): boolean {
    return this.selectedObjectId == null;
  }

  async getObjects(){
    await this.service.getFilterdObj(this.objectnumber, this.technique, this.name, this.search, this.material);
    this.artObjects = this.service.results;
  }
}
