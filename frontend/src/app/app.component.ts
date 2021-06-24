import { Component, OnInit } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.backendService.getData().subscribe((data) => {
      console.log(data);
    });
  }
}
