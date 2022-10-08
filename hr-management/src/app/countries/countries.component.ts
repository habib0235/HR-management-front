import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from '../mock-countries';
import { Country } from '../model/country';


@Component({
  selector: 'hr-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries = COUNTRIES;
  filteredCountries = this.countries;

  private _filter = "";

  get filter(): string {
    return this._filter;
  }

  set filter(value: string) {
    console.log("In setter : " + this.filter);
    this._filter = value;
    this.filteredCountries = this.filterCountries();
  }



  constructor() { }

  ngOnInit(): void {
  }

  filterCountries() {
    return this.countries.filter((country: Country) => country.countryName.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase()));
  }

}
