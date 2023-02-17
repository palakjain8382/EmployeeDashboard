import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInComponent } from './work-in.component';

describe('WorkInComponent', () => {
  let component: WorkInComponent;
  let fixture: ComponentFixture<WorkInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
