import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinkonchuotComponent } from './binkonchuot.component';

describe('BinkonchuotComponent', () => {
  let component: BinkonchuotComponent;
  let fixture: ComponentFixture<BinkonchuotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinkonchuotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinkonchuotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
