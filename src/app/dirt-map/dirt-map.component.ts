import { Component, OnInit } from '@angular/core';
import { DirtMapService } from './dirt-map.service';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';

@Component({
  selector: 'dirt-map',
  templateUrl: './dirt-map.component.html',
  styleUrls: ['./dirt-map.component.scss'],
})
export class DirtMapComponent implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lng = 3.3717544;
  lat = 6.5142624;   

  hospitals : any = this.mapService.getHospitals();
  constructor(private mapService : DirtMapService) {
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(environment.mapbox.accessToken);
    
  }

  ngOnInit() {
    this.hospitals = this.mapService.getHospitals()
    this.initializeMap()
  }

  private initializeMap() {
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log("Currenct location>> long | lat", this.lng, this.lat )
        this.map.flyTo({
          center: [this.lng, this.lat]
        })
      });
    }

    this.buildMap()

  }
  buildMap() {
    this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 13,
        center: [this.lng, this.lat],

    },);
  // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());



    this.map.on('load', () => {


      this.map.addLayer({
        id: 'hospitals',
        type: 'circle',
        source: {
          type: 'geojson',
          data: this.hospitals
          
        },
      });

      console.log(">DS>SD>SD", this.map.getLayer('hospitals'))

      
      
      })

  }

}
