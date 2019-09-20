import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirtMapComponent } from './dirt-map.component';

describe('DirtMapComponent', () => {
  let component: DirtMapComponent;
  let fixture: ComponentFixture<DirtMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirtMapComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirtMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
