import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Environment} from "@angular/cli/lib/config/workspace-schema";
import {MuseumServive} from "../../service/museum-servive";
import {Collection} from "../../models/collection";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public collections: Collection | undefined;

  constructor(private service: MuseumServive) { }


  ngOnInit(): void {
   this.service.test();
  }

}
