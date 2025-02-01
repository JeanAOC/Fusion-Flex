import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionFlexComponent } from './fusion-flex.component';

describe('FusionFlexComponent', () => {
  let component: FusionFlexComponent;
  let fixture: ComponentFixture<FusionFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FusionFlexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FusionFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
