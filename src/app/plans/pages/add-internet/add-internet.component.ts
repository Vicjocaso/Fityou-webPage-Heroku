import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Internet } from '../../interfaces/plan.interface';

@Component({
  selector: 'app-add-internet',
  templateUrl: './add-internet.component.html'
})
export class AddInternetComponent implements OnInit {

  @Output() onNewInternet: EventEmitter<Internet> = new EventEmitter()


  myInternetForm: FormGroup = this.fb.group({
    Uploadspeed: ['', [Validators.required, Validators.min(1)]],
    Loweringspeed: ['', [Validators.required, Validators.min(1)]],
    Speed: ['', [Validators.required, Validators.min(1)]],
    Typeofnet: ['', [Validators.required]],
    Description: ['', Validators.required]
  })

  isFieldInvalid(fieldName: string) {

    const control: AbstractControl = this.myInternetForm.controls[fieldName];

    return control.invalid && control.touched;
  }

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
  }


  add(){
    this.onNewInternet.emit( this.myInternetForm.value )
  }

}
