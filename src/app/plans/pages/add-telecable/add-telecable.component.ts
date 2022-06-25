import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Telecable } from '../../interfaces/plan.interface';

@Component({
  selector: 'app-add-telecable',
  templateUrl: './add-telecable.component.html',
  styles: [
  ]
})
export class AddTelecableComponent implements OnInit {

  @Output() onNewTelecable: EventEmitter<Telecable> = new EventEmitter()


  myTelecableForm: FormGroup = this.fb.group({
    Chanels: ['', [Validators.required, Validators.maxLength(4)]],
    TypeOfTelecable: ['', [Validators.required, Validators.min(1)]],
    Description: ['', [Validators.required, Validators.maxLength(250)]]
  })

  isFieldInvalid(fieldName: string) {

    const control: AbstractControl = this.myTelecableForm.controls[fieldName];

    return control.invalid && control.touched;
  }


  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
  }

  add(){
    this.onNewTelecable.emit( this.myTelecableForm.value )
  }

}
