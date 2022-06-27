import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Router, ActivatedRoute } from '@angular/router';
import { PlanService } from '../../services/plans.service';
import { Plan } from '../../interfaces/plan.interface';
// import 'rxjs/add/operator/filter';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-plan-comparison',
  templateUrl: './plan-comparison.component.html',
  styleUrls: ['./plan-comparison.component.scss'],
  providers: [DialogService, MessageService],
})
export class PlanComparisonComponent implements OnInit {
  planId: string;
  plan1: Plan[] = [];
  //   {
  //     Id: 1,
  //     Title: 'Internet Movil 50GB',
  //     Description:
  //       'Lorem Ipsum is simply duminter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //     TypeOfPlan: 'I',
  //     CreateDate: '2022-01-15T00:00:00',
  //     ActiveTime: 'Un mes',
  //     Price: 700.0,
  //     Currency: 'DOP',
  //     Administrator: null,
  //     AdministratorId: 1,
  //     CompanyId: 1,
  //     InternetId: 2,
  //     Internet: {
  //       DetailPlans: [],
  //       Id: 5,
  //       Uploadspeed: 60,
  //       Loweringspeed: 20,
  //       Speed: 60,
  //       TypeOfNet: 'Full Con todo',
  //       Description: 'Esta es la descripcion del internet full',
  //     },
  //     TelecableId: 3,
  //     TelephoneId: 4,
  //   },
  // ];

  plan2: Plan[] = [];
  //   {
  //     Id: 2,
  //     Title: 'Internet Movil 50GB',
  //     Description:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //     TypeOfPlan: 'T',
  //     CreateDate: '2022-01-15T00:00:00',
  //     ActiveTime: 'Un mes',
  //     Price: 400.0,
  //     Currency: 'DOP',
  //     Administrator: null,
  //     AdministratorId: 1,
  //     Telephone: {
  //       DetailPlans: [],
  //       Id: 1,
  //       Minutes: '50',
  //       Service: 'ASDASD',
  //       Description: 'ASDASDASD',
  //     },
  //     CompanyId: 1,
  //     InternetId: 2,
  //     TelecableId: 3,
  //     TelephoneId: 4,
  //   },
  // ];

  constructor(
    public dialogService: DialogService,
    public messageService: MessageService,
    // private router: Router,
    private actRoute: ActivatedRoute,
    private plansService: PlanService
  ) {}

  ngOnInit(): void {
    this.actRoute.queryParams
      .pipe(
        switchMap((result) => this.plansService.getPlanById(result['plan1']))
      )
      .subscribe((result) => {
        this.plan1 = [result];
        console.log('plan1', this.plan1);
      });

    this.actRoute.queryParams
      .pipe(
        switchMap((result) => this.plansService.getPlanById(result['plan2']))
      )
      .subscribe((result) => {
        this.plan2 = [result];

        console.log('plan2', this.plan2);
      });

    // this.loadProductDetails(this.planId);
  }

  // loadProductDetails(planId: any) {
  //   this.plansService.getPlanById(planId).subscribe((resp) =>{
  //     this.plan1 = [resp];

  //     // this.plan = resp;
  //     console.log('Este es el product ID', planId);
  //   });
  // }
}
