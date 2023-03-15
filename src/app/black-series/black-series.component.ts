import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { BlackSeries } from 'src/assets/message';

@Component({
  selector: 'app-black-series',
  templateUrl: './black-series.component.html',
  styleUrls: ['./black-series.component.css'],
  providers: [ApiService]
})
export class BlackSeriesComponent implements OnInit {
  data: BlackSeries[] = [];

  constructor(private apiService: ApiService) { }

  getBlackSeriesData() {
    this.apiService.getBlackSeries().subscribe(
      data => (this.data = data)
    )
  }

  ngOnInit(): void {
    this.getBlackSeriesData()
  }

}