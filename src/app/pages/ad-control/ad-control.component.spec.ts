import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdControlComponent } from './ad-control.component';

describe('AdControlComponent', () => {
  let component: AdControlComponent;
  let fixture: ComponentFixture<AdControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
