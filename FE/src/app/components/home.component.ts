import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: '../styles/home.component.html',
  styleUrls: ['../styles/home.component.css'],
  providers: [HomeComponent],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {

  }


}
