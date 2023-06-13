import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestConfirmModelComponent } from './request-confirm-model.component';

describe('RequestConfirmModelComponent', () => {
  let component: RequestConfirmModelComponent;
  let fixture: ComponentFixture<RequestConfirmModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestConfirmModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestConfirmModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
