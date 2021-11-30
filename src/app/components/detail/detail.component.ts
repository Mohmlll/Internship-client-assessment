import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";
import {MuseumServive} from "../../service/museum-servive";
import {isUndefined, omitBy} from "lodash";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  objectNumber: string | undefined;
  private childParamsSubscription: Subscription | undefined;

  artObject: any | undefined;

  constructor(protected activatedRoute: ActivatedRoute, private service: MuseumServive) {

  }

  ngOnInit(): void {
    console.log(this.artObject)
    this.childParamsSubscription = this.activatedRoute.params.subscribe(
      (params: Params) => {
        console.log("detail setup objectnumber = " + params['objectnumber']);
        console.log(params['objectnumber'])
        this.artObject = this.service.findById(params['objectnumber'])
        console.log(this.artObject)
      }
    );
  }


  ngOnDestroy() {
    this.childParamsSubscription &&
    this.childParamsSubscription.unsubscribe();
  }
}
