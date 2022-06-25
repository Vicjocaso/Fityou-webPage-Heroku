import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../services/plans.service';

@Component({
  selector: 'app-view-plan',
  templateUrl: './view-plan.component.html',
  styles: [
  ]
})
export class ViewPlanComponent implements OnInit {

  

  constructor( planService: PlanService ) { }

  ngOnInit(): void {

    

    // this.planService.getPlanById(1)
    //     .subscribe(
    //       (plan) => {
    //         switch(plan.TypeOfPlan){
    //           case 'I':
    //             this.planService.getInternetPlanById(plan.Id)
    //             break;
              
    //           case 'C':
    //             this.planService.getTelecablePlanById(plan.Id)
    //             break;

    //           case 'T':
    //             this.planService.getTelephonePlanById(plan.Id)
    //             break;
              
    //         }
    //       }
    //     )
  }

}
