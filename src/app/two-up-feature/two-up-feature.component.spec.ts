import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoUpFeatureComponent } from './two-up-feature.component';

describe('TwoUpFeatureComponent', () => {
  let component: TwoUpFeatureComponent;
  let fixture: ComponentFixture<TwoUpFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoUpFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoUpFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
