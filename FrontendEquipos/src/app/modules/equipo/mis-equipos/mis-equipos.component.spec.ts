import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisEquiposComponent } from './mis-equipos.component';

describe('MisEquiposComponent', () => {
  let component: MisEquiposComponent;
  let fixture: ComponentFixture<MisEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisEquiposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
