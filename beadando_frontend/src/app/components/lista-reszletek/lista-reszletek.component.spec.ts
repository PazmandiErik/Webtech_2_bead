import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReszletekComponent } from './lista-reszletek.component';

describe('ListaReszletekComponent', () => {
  let component: ListaReszletekComponent;
  let fixture: ComponentFixture<ListaReszletekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaReszletekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaReszletekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
