import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageslidingComponent } from './mainpagesliding.component';

describe('MainpageslidingComponent', () => {
  let component: MainpageslidingComponent;
  let fixture: ComponentFixture<MainpageslidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainpageslidingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainpageslidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
