import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsModalComponent } from './coins-modal.component';

describe('CoinsModalComponent', () => {
  let component: CoinsModalComponent;
  let fixture: ComponentFixture<CoinsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoinsModalComponent]
    });
    fixture = TestBed.createComponent(CoinsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
