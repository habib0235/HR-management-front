import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from '../mock-countries';


@Component({
  selector: 'hr-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {



  countries = COUNTRIES;

  constructor() { }

  ngOnInit(): void {
  }

}
