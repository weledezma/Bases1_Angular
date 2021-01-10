import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Perfil',  icon:'person', class: '' },
    { path: '/table-list', title: 'Vuelos',  icon:'flight_takeoff', class: '' },
    { path: '/typography', title: 'Hoteles',  icon:'hotel', class: '' },
    { path: '/icons', title: 'Vehiculos',  icon:'directions_car', class: '' },
    { path: '/notifications', title: 'Paquetes',  icon:'card_travel', class: '' },
    { path: '/notifications', title: 'Rallys',  icon:'tour', class: '' },
    { path: '/maps', title: 'Mapa',  icon:'location_on', class: '' },
    
    //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
