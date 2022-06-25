import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [ `
     
    button {
      z-index:-1;
    } 
    `
  ]
})


// `
//     #footer {
//             position: fixed;
//             padding: 10px 10px 0px 10px;
//             bottom: 0;
//             width: 100%;
//             /* Height of the footer*/ 
//             height: 400px;
//         }
//     `

export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
