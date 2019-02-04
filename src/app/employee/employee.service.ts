import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {IEmployee} from './employee.model';



@Injectable()
export class EmployeeService{

    emplist:IEmployee[];
constructor(private _httpservice:Http){

}


getempList(){

 return this._httpservice.get("http://localhost:8080/getallemp");

}

getemp(id:number){

    return this._httpservice.get("http://localhost:8080/getemp/"+id);
   
   }
   

}
