import { Component } from '@angular/core';
import { MyservService } from './allserv/myserv.service';
import { HttpClient } from '@angular/common/http';
// import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';
  constructor(private data:MyservService,private http:HttpClient){}
  ngOnInit(){
    
  }
}
