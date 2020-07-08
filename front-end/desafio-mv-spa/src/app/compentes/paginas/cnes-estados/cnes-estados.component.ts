import { CnesServiceService } from './../../../service/cnes-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cnes-estados',
  templateUrl: './cnes-estados.component.html',
  styleUrls: ['./cnes-estados.component.css']
})
export class CnesEstadosComponent implements OnInit {
  displayedColumns: string[] = ['codCnes', 'nomeFantasia', 'tipoUnidade', "detalhe", "estados"];
  dataSource = new MatTableDataSource();


  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageEvent: PageEvent = new PageEvent();
  estado: string;

  constructor(private http: HttpClient, private cnesService: CnesServiceService) { }

  ngOnInit(): void {
  }



  paginacao(envent?){
    this.cnesService.getCnesEstados(this.estado, this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe(

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
  selcionarEstado(estado){
    this.estado = estado;
    this.paginacao();

  }

}