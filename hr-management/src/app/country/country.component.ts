import { Component, OnInit } from '@angular/core';
import { Country } from '../model/country';

@Component({
  selector: 'hr-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  country: Country = {
    countryId: "1",
    countryName: 'Tunisia'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
