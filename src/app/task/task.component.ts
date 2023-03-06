import { Component } from '@angular/core';
import { MyservService } from '../allserv/myserv.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  projectData:any;
  programData:any;
  selectedOptions=[];
  items:any;
  constructor(private myservice:MyservService){

  }
   d: any = [];
  ngOnInit(){
 
   this.myservice.getprogram().subscribe(res=>{
    console.log(res);
    this.projectData=res
   }) 

   this.myservice.getproject().subscribe(result=>{
    console.log(result);
    this.programData=result;
   }) 
  
  }
  storeProductName:any=[];
  productSelect(data:any){
    this.storeProductName.push(data);
    console.log(this.storeProductName);
  } 
  
}
