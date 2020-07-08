import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabecarioComponent } from './compentes/cabecario/cabecario.component';
import { SidebarComponent } from './compentes/sidebar/sidebar.component';
import { CnesAtivosComponent } from './compentes/paginas/cnes-ativos/cnes-ativos.component';
import { CnesEstadosComponent } from './compentes/paginas/cnes-estados/cnes-estados.component';
import { HttpClientModule } from '@angular/common/http';
import { CnesTipoUnidadeComponent } from './compentes/paginas/cnes-tipo-unidade/cnes-tipo-unidade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { DetalhesComponent } from './compentes/modal/detalhes/detalhes.component';

@NgModule({
  declarations: [
    AppComponent,

    CabecarioComponent,

    SidebarComponent,

    CnesAtivosComponent,

    CnesEstadosComponent,

    CnesTipoUnidadeComponent,

    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
