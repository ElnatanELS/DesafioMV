import { CnesServiceService } from './../../../service/cnes-service.service';
import { paginacao } from './../../../../shared/util/paginacao';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { environment } from 'src/environments/environment';


const PATH_CNES: string = environment.servidoUrl + 'cnes-ativos';


@Component({
  selector: 'app-cnes-ativos',
  templateUrl: './cnes-ativos.component.html',
  styleUrls: ['./cnes-ativos.component.css']
})
export class CnesAtivosComponent implements OnInit {
  displayedColumns: string[] = ['codCnes', 'nomeFantasia', 'tipoUnidade', "detalhe"];
  dataSource = new MatTableDataSource();


  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageEvent: PageEvent = new PageEvent();


  constructor(private http: HttpClient, private cnesService: CnesServiceService){

  }

  ngOnInit() {
    this.paginacao();

  }


  paginacao(envent?){
    this.cnesService.getCnes(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe(

      (result:any) => {
        this.paginator.length = result.totalElements;
        this.paginator.pageSize = result.size;
        this.dataSource.data = result.content;

      }

    );


  }

  abriModalDetalhe(id){
    console.log(id);

  }

}
