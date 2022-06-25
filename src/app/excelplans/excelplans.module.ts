import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ExcelplansRoutingModule } from './excelplans-routing.module';
import { InsertInternetplanComponent } from './pages/insert-internetplan/insert-internetplan.component';


@NgModule({
  declarations: [
    InsertInternetplanComponent
  ],
  imports: [
    CommonModule,
    ExcelplansRoutingModule,
    HttpClientModule
  ]
})
export class ExcelplansModule { }
