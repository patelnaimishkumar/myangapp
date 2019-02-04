import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListemployeeComponent } from './employee/listemployee/listemployee.component';
import { CreateemployeeComponent } from './employee/createemployee.component';
import { EmpPipe } from './employee/employee.pipe';
import { EmployeeCount } from './employee/employeecount.component';
import { HomeComponent } from './employee/home.component';
import { PageNotFoundComponent } from './employee/pagenotfound.component';
import { EmployeeDetailComponent } from './employee/employeedetail.component';

import { TestComponent } from './employee/test/test.component';
import { EmployeeService } from './employee/employee.service';

const appRoutes:Routes=[
{path:"home",component:HomeComponent},
{path:"employee",component:CreateemployeeComponent},
{path:"employee/empdetail/:id",component:EmployeeDetailComponent},
{path:"**",component:PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ListemployeeComponent,
    CreateemployeeComponent,
    TestComponent,EmpPipe,EmployeeCount,PageNotFoundComponent,HomeComponent
    ,EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
