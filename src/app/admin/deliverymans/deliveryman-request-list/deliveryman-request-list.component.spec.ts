import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverymanRequestListComponent } from './deliveryman-request-list.component';

describe('DeliverymanRequestListComponent', () => {
  let component: DeliverymanRequestListComponent;
  let fixture: ComponentFixture<DeliverymanRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliverymanRequestListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliverymanRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
