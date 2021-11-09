import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluhaAppComponent } from './pluha-app.component';

describe('PluhaAppComponent', () => {
  let component: PluhaAppComponent;
  let fixture: ComponentFixture<PluhaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluhaAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluhaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
