/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllordersComponent } from './Allorders.component';

describe('AllordersComponent', () => {
  let component: AllordersComponent;
  let fixture: ComponentFixture<AllordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
