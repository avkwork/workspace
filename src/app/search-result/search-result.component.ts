import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  userlist = [];
  userCont: number;

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.apiService.get().subscribe((data: any[]) => {
     console.log(data);
     this.userlist = data;
    });
  }

}
