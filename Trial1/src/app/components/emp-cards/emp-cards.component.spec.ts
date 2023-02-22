import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCardsComponent } from './emp-cards.component';

describe('EmpCardsComponent', () => {
  let component: EmpCardsComponent;
  let fixture: ComponentFixture<EmpCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
