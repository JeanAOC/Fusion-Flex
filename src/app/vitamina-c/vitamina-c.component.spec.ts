import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaminaCComponent } from './vitamina-c.component';

describe('VitaminaCComponent', () => {
  let component: VitaminaCComponent;
  let fixture: ComponentFixture<VitaminaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VitaminaCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VitaminaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
