import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../services/plans.service';
import { Company } from '../../interfaces/plan.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  Company: any = [
    {
      Name: 'Altice',
    },
    {
      Name: 'Claro',
    },
    {
      Name: 'Viva',
    },
  ];

  isUserLoggedIn!: boolean;

  constructor(
    private planservice: PlanService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.planservice.getCompany().subscribe((response) => {
      this.Company = response;
    });

    this.authService
      .validateToken()
      .subscribe((resp) => (this.isUserLoggedIn = resp));
  }

  eliminar(id: number) {
    this.planservice.deleteCompany(id).subscribe((Response) => {
      console.log(Response);
    });
  }
}
