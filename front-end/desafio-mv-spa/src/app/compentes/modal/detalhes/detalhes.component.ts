import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  form: FormGroup = new FormGroup({
    codCnes: new FormControl(''),
    codIbge: new FormControl(''),
    nomeFantasia: new FormControl(''),
    tipoUnidade: new FormControl(''),
    tipoGestao:new FormControl(''),
    logradouro:new FormControl(''),
    numero:new FormControl(''),
    bairro:new FormControl(''),
    cep:new FormControl(''),
    uf:new FormControl(''),
    municipio:new FormControl(''),
    telefone:new FormControl(''),


  });

  ngOnInit(): void {

    this.form.patchValue(this.data)

  }

}
