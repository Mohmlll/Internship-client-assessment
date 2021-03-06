import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DetailComponent} from './components/detail/detail.component';
import {FooterComponent} from './components/footer/footer.component';
import {MainComponent} from './components/main/main.component';
import {HttpClientModule} from "@angular/common/http";
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AnagramComponent} from './components/anagram/anagram.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    FooterComponent,
    MainComponent,
    LandingPageComponent,
    NavBarComponent,
    AnagramComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
