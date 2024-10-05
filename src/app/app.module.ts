import { Component, NgModule } from "@angular/core"
import { AppComponent } from "./app.component"
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import {StudentListComponent} from "./components/student-list/student-list.component";
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {FruitListComponent} from "./components/fruit-list/fruit-list.component";


const routes: Routes = [
  {path: '', component: StudentListComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'fruit-list', component: FruitListComponent},

]

@NgModule ({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],

  declarations: [
    AppComponent,
    StudentListComponent,
    EmployeeListComponent,
    FruitListComponent,


  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}