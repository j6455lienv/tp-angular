import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpServiceComponent } from './tp-service.component';

describe('TpServiceComponent', () => {
  let component: TpServiceComponent;
  let fixture: ComponentFixture<TpServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
