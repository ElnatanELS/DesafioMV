import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnesAtivosComponent } from './cnes-ativos.component';

describe('CnesAtivosComponent', () => {
  let component: CnesAtivosComponent;
  let fixture: ComponentFixture<CnesAtivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnesAtivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnesAtivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
