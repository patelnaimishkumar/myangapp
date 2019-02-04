import { EmployeeService } from "./employee.service";
import { IEmployee } from "./employee.model";
import { ActivatedRoute } from "@angular/router";
import { OnInit, Component } from "@angular/core";

@Component({
    templateUrl:'./empdetail.component.html',
    providers: [EmployeeService]
})
export class EmployeeDetailComponent implements OnInit{
   
    constructor(private _activatedRoutevser:ActivatedRoute,private _empService:EmployeeService){}

    emp:IEmployee;

   

    ngOnInit(): void {
        let id:number=this._activatedRoutevser.snapshot.params["id"]
this._empService.getemp(id).subscribe(v=>this.setEmp(<IEmployee>v.json()))
    }

    setEmp(v :IEmployee){
        this.emp=v;
    }

}