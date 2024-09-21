import { MediaMatcher } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.components.css'
})
export class SidenavComponent {

  mobileQuery: MediaQueryList;

  menuNav = [ 
    {name:'Home', route: 'home', icon:'home'},
    {name:'Carreras', route: 'home', icon:'category'},
    {name:'Examenes', route: 'home', icon:'calendar_today'},
  ];

  constructor(media: MediaMatcher){
    this.mobileQuery = media.matchMedia('max-width: 600px');
  }
}
