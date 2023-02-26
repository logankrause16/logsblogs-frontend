import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { HomePage } from 'src/assets/message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApiService]
})
export class HomeComponent implements OnInit {
  data: HomePage | undefined; 

  constructor(private apiService: ApiService) {}

  getHomePageData() {
    this.apiService.getHomePage().subscribe(
      data => (this.data = data)
    )
  }

  ngOnInit(): void {
    this.getHomePageData()
  }
}
