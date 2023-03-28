import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInvitacionesComponent } from './lista-invitaciones.component';

describe('ListaInvitacionesComponent', () => {
  let component: ListaInvitacionesComponent;
  let fixture: ComponentFixture<ListaInvitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaInvitacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaInvitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
