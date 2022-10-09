import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../model/country';

@Component({
  selector: 'hr-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input() country: Country = {
    countryId: "1",
    countryName: 'Tunisia',
    countryRegion: { regionId: "2", regionName: "Africa" }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
