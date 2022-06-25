import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ViewPlanComponent } from './pages/view-plan/view-plan.component';
import { AddPlanComponent } from './pages/add-plan/add-plan.component';
import { ListComponent } from './pages/list/list.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PlanComparisonComponent } from './pages/plan-comparison/plan-comparison.component';
import { PlansRoutingModule } from './plans-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyComponent } from './pages/company/company.component';
import { AboutComponent } from './pages/about/about.component';
import { SharedModule } from '../shared/shared.module';
import { NgForm } from '@angular/forms';
import { AddInternetComponent } from './pages/add-internet/add-internet.component';
import { AddTelephoneComponent } from './pages/add-telephone/add-telephone.component';
import { AddTelecableComponent } from './pages/add-telecable/add-telecable.component';

@NgModule({
  declarations: [
    HomeComponent,
    ViewPlanComponent,
    AddPlanComponent,
    ListComponent,
    PlanComparisonComponent,
    CompanyComponent,
    AboutComponent,
    AddInternetComponent,
    AddTelephoneComponent,
    AddTelecableComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    PlansRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class PlansModule {}
