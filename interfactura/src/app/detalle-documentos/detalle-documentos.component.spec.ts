import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDocumentosComponent } from './detalle-documentos.component';

describe('DetalleDocumentosComponent', () => {
  let component: DetalleDocumentosComponent;
  let fixture: ComponentFixture<DetalleDocumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleDocumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
