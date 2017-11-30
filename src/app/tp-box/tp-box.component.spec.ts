import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpBoxComponent } from './tp-box.component';

describe('TpBoxComponent', () => {
  let component: TpBoxComponent;
  let fixture: ComponentFixture<TpBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
