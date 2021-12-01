import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {DetailComponent} from "./components/detail/detail.component";
import {AnagramComponent} from "./components/anagram/anagram.component";

const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {
    path: 'main', component: MainComponent, children: [
      {path: ':objectnumber', component: DetailComponent},
    ]
  },
  {path: 'anagram', component: AnagramComponent},
  {path: 'landing', component: LandingPageComponent},

  {path: '**', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
