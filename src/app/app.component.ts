import { Component, OnInit } from '@angular/core';
import { TawkToService } from './services/TawkToService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-webpage';
  constructor(private tawktoService: TawkToService){}
  ngOnInit(){
      this.tawktoService.initializeTawkTo();
  }
}
