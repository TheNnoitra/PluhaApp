import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitRequestComponent } from './git-request.component';

describe('GitRequestComponent', () => {
  let component: GitRequestComponent;
  let fixture: ComponentFixture<GitRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
