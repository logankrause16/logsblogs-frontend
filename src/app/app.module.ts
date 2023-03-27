import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlackSeriesComponent } from './black-series/black-series.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GameReviewsComponent } from './game-reviews/game-reviews.component';
import { SharedComponent } from './shared/shared.component';
import { DataGridComponent } from './shared/data-grid/data-grid.component';
import { ModalComponent } from './shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackSeriesComponent,
    HomeComponent,
    NavBarComponent,
    GameReviewsComponent,
    SharedComponent,
    DataGridComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
