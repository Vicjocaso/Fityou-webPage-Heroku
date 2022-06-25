import { Component, OnInit, EventEmitter } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-insert-internetplan',
  templateUrl: './insert-internetplan.component.html',
  styleUrls: ['./insert-internetplan.component.css']
})
export class InsertInternetplanComponent implements OnInit {

  fileToUpload : File | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelect(event : Event){
    console.log( (event.target as HTMLInputElement).files );
  }

}
