import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirtMapService {
  hospitals = {
    "type": "FeatureCollection",
    "features": [
      { "type": "Feature", "properties": { "Name": "VA Medical Center -- Leestown Division", "Address": "2250 Leestown Rd" }, "geometry": { "type": "Point", "coordinates": [ 3.3717345 , 6.5172338] } },
      { "type": "Feature", "properties": { "Name": "St. Joseph East", "Address": "150 N Eagle Creek Dr" }, "geometry": { "type": "Point", "coordinates": [ 3.3687091, 6.51726914 ] } },
    ]
  };

  constructor() { }
  getHospitals(){
    return this.hospitals
  }
}
