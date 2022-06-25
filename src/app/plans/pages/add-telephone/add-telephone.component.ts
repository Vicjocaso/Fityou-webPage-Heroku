import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Telephone } from '../../interfaces/plan.interface';

@Component({
  selector: 'app-add-telephone',
  templateUrl: './add-telephone.component.html',
  styles: [
  ]
})
export class AddTelephoneComponent implements OnInit {

  @Output() onNewTelephone: EventEmitter<Telephone> = new EventEmitter()


  myTelephoneForm: FormGroup = this.fb.group({
    Minutes: ['', [Validators.required, Validators.maxLength(5)]],
    Service: ['', [Validators.required, Validators.maxLength(250)]],
    Description: ['', [Validators.required, Validators.maxLength(250)]]
  })

  isFieldInvalid(fieldName: string) {

    const control: AbstractControl = this.myTelephoneForm.controls[fieldName];

    return control.invalid && control.touched;
  }


  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
  }

  add(){
    this.onNewTelephone.emit( this.myTelephoneForm.value )
  }

}
