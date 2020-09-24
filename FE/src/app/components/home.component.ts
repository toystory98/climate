import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';


@Component({
  selector: 'app-home',
  templateUrl: '../styles/home.component.html',
  styleUrls: ['../styles/home.component.css'],
  providers: [HomeComponent],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getDay();
    this.getMonth();
    this.getYear();
    this.getStation();
  }

  selectedStation = 'select station';
  selectedMonth = 'select month';
  selectedYear = 'select year';

  listdata = [];
  d =[];
  listYear = [];
  listMonth = [];
  listDay = [];
  listStation = [];

  show() {
    this.queryData();
    console.log(this.listdata);
  }

  queryData() {
    this.listdata = [];
    this.homeService
      .queryData(this.selectedStation, this.selectedMonth, this.selectedYear)
      .subscribe((data) => {
        data['result'].map((v) => {
          this.listdata.push(v);
        });
      });
  }

  getDay() {
    this.listDay = [];
    this.homeService.listDMY('day').subscribe((data) => {
      data['result'].map((v) => {
        this.listDay.push(v);
      });
    });
  }

  getMonth() {
    this.listMonth = [];
    this.homeService.listDMY('month').subscribe((data) => {
      data['result'].map((v) => {
        this.listMonth.push(v);
      });
    });
  }

  getYear() {
    this.listYear = [];
    this.homeService.listDMY('year').subscribe((data) => {
      data['result'].map((v) => {
        this.listYear.push(v);
      });
    });
  }

  getStation(){
    this.listStation = [];
    this.homeService.listStation().subscribe((data) => {
      data["result"].map((v) => {
        this.listStation.push(v);
      });
    });
  }
}
