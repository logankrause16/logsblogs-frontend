import { NgModule } from '@angular/core';
import { BlackSeriesComponent } from './black-series/black-series.component';
import { RouterModule, Routes } from '@angular/router';
import { GameReviewsComponent } from './game-reviews/game-reviews.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'black-series', component: BlackSeriesComponent },
  { path: 'game-reviews', component: GameReviewsComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
