
import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/place.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  private debouncetime? : NodeJS.Timeout;

  constructor(
    private placesService : PlacesService
  ) { }

  ngOnInit(): void {
  }
  
  onQueryChage(value : string = ' '){
    
    if(this.debouncetime) clearTimeout(this.debouncetime);

    this.debouncetime = setTimeout(() => {
      this.placesService.getplacesbyQuery(value);
    }, 1000 );

  }
}
