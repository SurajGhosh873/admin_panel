import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypeAccessComponent } from './user-type-access.component';

describe('UserTypeAccessComponent', () => {
  let component: UserTypeAccessComponent;
  let fixture: ComponentFixture<UserTypeAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTypeAccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserTypeAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
