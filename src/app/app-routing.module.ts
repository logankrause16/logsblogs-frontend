import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackSeriesComponent } from './black-series/black-series.component';
import { CesiumComponent } from './cesium/cesium.component';
import { GameReviewsComponent } from './game-reviews/game-reviews.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'black-series', component: BlackSeriesComponent },
  { path: 'game-reviews', component: GameReviewsComponent },
  { path: 'cesium', component: CesiumComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
