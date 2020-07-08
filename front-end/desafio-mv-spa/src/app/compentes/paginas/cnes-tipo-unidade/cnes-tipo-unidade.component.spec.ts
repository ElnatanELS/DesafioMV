import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnesTipoUnidadeComponent } from './cnes-tipo-unidade.component';

describe('CnesTipoUnidadeComponent', () => {
  let component: CnesTipoUnidadeComponent;
  let fixture: ComponentFixture<CnesTipoUnidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnesTipoUnidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnesTipoUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
