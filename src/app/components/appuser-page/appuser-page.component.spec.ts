import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppuserPageComponent } from './appuser-page.component';

describe('AppuserPageComponent', () => {
  let component: AppuserPageComponent;
  let fixture: ComponentFixture<AppuserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppuserPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppuserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
