import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const PATH_CNES: string = environment.servidoUrl + 'cnes-ativos';
const PATH_CNES_ESTADOS: string = environment.servidoUrl + 'cnes-ativos/estados/';
const PATH_CNES_UNIDADES: string = environment.servidoUrl + 'cnes-ativos/unidades';
const PATH_CNES_TIPOS_UNIDADES: string = environment.servidoUrl + 'cnes-ativos/tipos-de-unidade';

@Injectable({
  providedIn: 'root'
})
export class CnesServiceService {

  constructor(private http: HttpClient) { }

  getCnes(pagina?, tamanho?){

    let params = new HttpParams().set("page",pagina).set("size", tamanho);

    return this.http.get(PATH_CNES, {params:params});
  }
  getCnesEstados(sigla?, pagina?, tamanho?){

    let params = new HttpParams().set("page",pagina).set("size", tamanho);

    return this.http.get(PATH_CNES_ESTADOS + sigla, {params:params});
  }
  getTiposUnidades(unidade?, pagina?, tamanho?){

    let params = new HttpParams().set("tipoDeUnidade", unidade).set("page",pagina).set("size", tamanho);

    return this.http.get(PATH_CNES_TIPOS_UNIDADES, {params:params});
  }

  getUnidades(){
    return this.http.get(PATH_CNES_UNIDADES);

  }

  getCnesId(id){
    return this.http.get(PATH_CNES + "/" + id);
  }
}
