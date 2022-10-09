import { Country } from "./model/country";
import { Region } from "./model/region";


export const REGIONS: Region[] = [
  { regionId: "1", regionName: "Europe" },
  { regionId: "2", regionName: "America" },
  { regionId: "3", regionName: "Asia" },
  { regionId: "4", regionName: "Africa" }
];

export const COUNTRIES: Country[] = [
  { countryId: '1', countryName: 'Tunisia', countryRegion: REGIONS[3] },
  { countryId: '2', countryName: 'France', countryRegion: REGIONS[0] },
  { countryId: '3', countryName: 'USA', countryRegion: REGIONS[1] },
  { countryId: '4', countryName: 'Japan', countryRegion: REGIONS[2] },
  { countryId: '5', countryName: 'Russia', countryRegion: REGIONS[0] },

];