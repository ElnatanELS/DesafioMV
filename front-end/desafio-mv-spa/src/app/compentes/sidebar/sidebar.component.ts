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
    icon: "infor"
    },
    {
    label: "Cnes Estados",
    rota: "/cnes-estados",
    icon: "infor"
    },
    {
      label: "Cnes Tipos de Unidade",
      rota: "/cnes-tipos",
      icon: "infor"
      }];

  constructor() { }

  ngOnInit(): void {
  }



}
