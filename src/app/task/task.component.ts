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
   projectList: any = [];
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
//   productSelect(data:any){
//     this.storeProductName.push(data);
//     console.log(this.storeProductName);
//   } 
  
  
  showList(val: string) {
    for (var i = 0; i < 17; i++) {
      var c = 0;
      if (val == this.projectData.virtualProgramDetails[i].programID) {
        for (var j = 0; j < this.projectList.length; j++) {
          if (this.projectList[j] == this.projectData.virtualProgramDetails[i].projectName) {
            c++;
          }
        }
        if (!c)
          this.projectList.push(this.projectData.virtualProgramDetails[i].projectName);
      }
    }
  }

  
}
