import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertInternetplanComponent } from './pages/insert-internetplan/insert-internetplan.component';

const routes: Routes = [
  {
    path: '',
    children: [ 
     { path: 'internet' , component: InsertInternetplanComponent } ,
     { path: '**' , redirectTo : 'internet' } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExcelplansRoutingModule { }
