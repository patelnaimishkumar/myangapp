import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee.model';
import { EmployeeService } from './employee.service';
import {Http,Response} from '@angular/http';
import { map, retry, retryWhen, scan, delay } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs'

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

selectedval:string="all";
retrycount:string;

name:string="naimish";
lastname:string="patel";
age:number=32;
gender:string="male";
address:string="blr";
isdissable:boolean=false;
emplist:IEmployee[];
constructor(private _empservice:EmployeeService){

}
 ngOnInit() {
this._empservice.getempList()
.pipe(retryWhen((err:Observable<Response>)=>{
  return err
  .pipe(scan(a=>{
    a+=1;this.retrycount="retry..."+a;return a;
  },0))
}),delay(100))
.subscribe(e=>this.emplist=<IEmployee[]>e.json(),(error)=>console.log(error));
  }

  setEmployee(e){
    if(e!=null){
    this.emplist=<IEmployee[]>e.json();
    console.log("---"+this.emplist)
    }
}

oncountchange(changedval:string):void{
this.selectedval=changedval;
console.log(changedval)
}

refresh():void{
this.emplist=[
{id:1,name:"a",age:13,email:"A@",gender:"M"},
{id:2,name:"b",age:13,email:"b@",gender:"M"},
{id:3,name:"c",age:13,email:"c@",gender:"M"},
{id:4,name:"d",age:14,email:"d@",gender:"F"}
]
}


getFullName() :string{
return this.name+" "+this.lastname
}

onClick() :void{
this.isdissable=!this.isdissable;
}

trackbycode(index:number,emp:any):string{
return emp.id;
}

gettotalemp():number{
return this.emplist.length
}
gettotalmaleemp():number{
return this.emplist.filter(e=>e.gender==='M').length
}
gettotalfemaleemp():number{
return this.emplist.filter(e=>e.gender==='F').length
}


}
