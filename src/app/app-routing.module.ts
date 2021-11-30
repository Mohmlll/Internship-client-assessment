import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {DetailComponent} from "./components/detail/detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'main', component: MainComponent, children: [
      {path: ':id', component: DetailComponent},
    ]
  },
  {path: 'landing', component: LandingPageComponent},

  {path: '**', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
