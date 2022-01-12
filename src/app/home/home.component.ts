import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data$: Observable<any>;

  constructor(private service: BackendService) {
    // this.service.getHome().subscribe({
    //     next: (x: any) => console.log('Data Received: ' + x),
    //     error: (err: Error) => console.error('Observere got an error: ', + err),
    //     complete: () => console.log('Observer got a complete notification')
    // });
  }

  getData() {
    this.data$ = this.service.getHome();
  }

  ngOnInit(): void {
    this.getData();
  }

}
