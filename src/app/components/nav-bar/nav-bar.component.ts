import {Component, OnInit} from '@angular/core';
import {Router, NavigationStart, NavigationEnd, RouterEvent} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {

  }

}
