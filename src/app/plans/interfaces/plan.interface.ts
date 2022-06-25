export interface Company {
  CompanyDetails: CompanyDetail[];
  Offices: any[];
  Plans: Plan[];
  Id: number;
  Name: string;
}

export interface TypesOfPlans {
  label: string;
  value: string;
}

export interface CompanyDetail {
  Id: number;
  CompanyId: number;
  DetailPlan: null;
  DetailPlanId: number;
}

export interface Plan {
  Id: number;
  Title: string;
  Description: string;
  TypeOfPlan: string;
  CreateDate: string;
  ActiveTime: string;
  price: number;
  Currency: string;
  Administrator: null;
  AdministratorId: number;
  CompanyId: number;
  Internet: Internet;
  Telephone: Telephone;
  Telecable: Telecable;
  InternetId: number;
  TelecableId: number;
  TelephoneId: number;
}

export interface PlanPost {
    Title:           string;
    Description:     string;
    TypeOfPlan:      string;
    CreateDate:      Date;
    ActiveTime:      string;
    Price:           number;
    Currency:        string;
    AdministratorId: number;
    CompanyId:       number;
    InternetId?:     number;
    TelecableId?:     number;
    TelephoneId?:     number;
    
}

export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}


export interface Internet{
  Id?: number;
  Uploadspeed: string;
  Loweringspeed: string;
  Speed: string;
  Typeofnet: string;
  Description: string;
}

export interface PlanSpecificPostResponse{
  message: string;
  id: number;
}

export interface Telecable{
  Channels: string;
  TypeOfTelecable: string;
  Description: string;
}

export interface Telephone{
  Minutes: string;
  Service: string;
  Description: string;
}