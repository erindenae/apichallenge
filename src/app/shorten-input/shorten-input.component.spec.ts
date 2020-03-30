import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenInputComponent } from './shorten-input.component';

describe('ShortenInputComponent', () => {
  let component: ShortenInputComponent;
  let fixture: ComponentFixture<ShortenInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortenInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
