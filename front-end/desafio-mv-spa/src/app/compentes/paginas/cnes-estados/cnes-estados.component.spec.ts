import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnesEstadosComponent } from './cnes-estados.component';

describe('CnesEstadosComponent', () => {
  let component: CnesEstadosComponent;
  let fixture: ComponentFixture<CnesEstadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnesEstadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnesEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
