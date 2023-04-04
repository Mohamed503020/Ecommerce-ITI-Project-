import { Component } from '@angular/core';

interface Site {
  name: string;
  imageUrl: string;
  imageBounds: google.maps.LatLngBoundsLiteral;
  iconUrl: string;
  visible: boolean;
  showIcon: boolean;
}

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  usa:boolean=true
  uk:boolean=false
  china:boolean=false
  russia:boolean=false
  egypt:boolean=false

  center: google.maps.LatLngLiteral = { lat: 37.0902, lng: -95.7129 };
  zoom = 3.5;
  iconUrl = 'https://cdn-icons-png.flaticon.com/512/263/263142.png';
  sites: Site[] = [
    {
      name: 'USA',
      imageUrl: this.iconUrl,
      imageBounds: {
        north: 40,
        south: 35,
        east: -100,
        west: -110,
      },
      iconUrl: this.iconUrl,
      visible: true,
      showIcon: true,
    },
    {
      name: 'UK',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/263/263142.png',
      imageBounds: {
        north: 55,
        south: 53,
        east: 1,
        west: -4,
      },
      iconUrl: this.iconUrl,
      visible: true,
      showIcon: true,
    },
    {
      name: 'China',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/263/263142.png',
      imageBounds: {
        north: 35,
        south: 30,
        east: 105,
        west: 100,
      },
      iconUrl: this.iconUrl,
      visible: true,
      showIcon: true,
    },
    {
      name: 'Russia',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/263/263142.png',
      imageBounds: {
        north: 59,
        south: 55,
        east: 100,
        west: 90,
      },
      iconUrl: this.iconUrl,
      visible: true,
      showIcon: true,
    },
    {
      name: 'Egypt',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/263/263142.png',
      imageBounds: {
        east: 33,
        north: 33,
        south: 28,
        west: 28,
      },
      iconUrl: this.iconUrl,
      visible: true,
      showIcon: true,
    }
  ];

  zoomIn(site: Site) {
    this.center = {
      lat: (site.imageBounds.north + site.imageBounds.south) / 2,
      lng: (site.imageBounds.east + site.imageBounds.west) / 2,
    };
    this.zoom = 4;
    for (const s of this.sites) {
      s.visible = s.name === site.name;
      s.showIcon = s.name === site.name;
    }
    if(site.name=='USA'){
      this.usa=true;
      this.china=this.russia=this.uk=this.egypt=false;
    }
    if(site.name=='UK'){
      this.uk=true;
      this.china=this.russia=this.usa=this.egypt=false;
    }
    if(site.name=='China'){
      this.china=true;
      this.usa=this.russia=this.uk=this.egypt=false;
    }
    if(site.name=='Russia'){
      this.russia=true;
      this.china=this.usa=this.uk=this.egypt=false;
    }
    if(site.name=='Egypt'){
      this.egypt=true;
      this.usa=this.china=this.uk=this.russia=false;
    }
    
  }
}