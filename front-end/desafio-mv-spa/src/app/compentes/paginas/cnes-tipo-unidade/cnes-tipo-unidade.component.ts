import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { CnesServiceService } from 'src/app/service/cnes-service.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DetalhesComponent } from '../../modal/detalhes/detalhes.component';

@Component({
  selector: 'app-cnes-tipo-unidade',
  templateUrl: './cnes-tipo-unidade.component.html',
  styleUrls: ['./cnes-tipo-unidade.component.css'],
})
export class CnesTipoUnidadeComponent implements OnInit {
  displayedColumns: string[] = [
    'codCnes',
    'nomeFantasia',
    'tipoUnidade',
    'detalhe',
  ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageEvent: PageEvent = new PageEvent();
  autoComplete = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  constructor(
    private http: HttpClient,
    private cnesService: CnesServiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.cnesService.getUnidades().subscribe((result: any) => {
      this.options = result;

    });

    this.filteredOptions = this.autoComplete.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }



  paginacao(envent?) {
    this.cnesService
      .getTiposUnidades(this.autoComplete.value, this.pageEvent.pageIndex, this.pageEvent.pageSize)
      .subscribe((result: any) => {
        this.paginator.length = result.totalElements;
        this.paginator.pageSize = result.size;
        this.dataSource.data = result.content;
      });
  }

  abriModalDetalhe(id) {
    this.cnesService.getCnesId(id).subscribe((result) => {
      this.dialog.open(DetalhesComponent, {
        data: result,
      });
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(
      (option) => option.toLowerCase().indexOf(filterValue) === 0
    );
  }

  pesquisar(form: FormControl){
    this.autoComplete = form;
    this.paginacao();


  }

  limpar(){
    this.autoComplete.reset()

  }

}
