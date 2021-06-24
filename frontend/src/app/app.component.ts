import { Component, OnInit } from '@angular/core';
import { BackendService } from './backend.service';
import { BackendMessage } from './backendmessage.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  backendMessage: BackendMessage = {"message": ""};

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.backendService.getData().subscribe((data) => {
      this.backendMessage = data;
    });
  }
}
