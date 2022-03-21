import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularCesiumModule } from 'angular-cesium';
import { BlackSeriesComponent } from './black-series/black-series.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GameReviewsComponent } from './game-reviews/game-reviews.component';
import { CesiumComponent } from './cesium/cesium.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackSeriesComponent,
    HomeComponent,
    NavBarComponent,
    GameReviewsComponent,
    CesiumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularCesiumModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
