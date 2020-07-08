import { ItemMenu } from './../../../shared/models/Item-menu.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menus: ItemMenu[]= [
    {
    label: 'Cnes Ativos',
    rota: '/',
    icon: "store_mall_directory"
    },
    {
    label: "Cnes Estados",
    rota: "/cnes-estados",
    icon: "map"
    },
    {
      label: "Cnes Tipos de Unidade",
      rota: "/cnes-tipos",
      icon: "menu_book"
      }];

  constructor() { }

  ngOnInit(): void {
  }



}
