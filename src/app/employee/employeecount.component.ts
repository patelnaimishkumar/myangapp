import { Component,Input,Output,EventEmitter} from '@angular/core';
@Component({
selector:'emp-count',
templateUrl:'./employeeCount.component.html'
})

export class EmployeeCount{

selectedradiobtn:string="all";

@Output()
radiochngeevent:EventEmitter<string>=new EventEmitter<string>();



@Input()
 all:number;
@Input()
male:number;
@Input()
female:number;

onradioselectchange(){
this.radiochngeevent.emit(this.selectedradiobtn);
console.log(this.selectedradiobtn)
}


}
