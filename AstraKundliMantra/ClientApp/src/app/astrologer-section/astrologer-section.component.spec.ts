import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologerSectionComponent } from './astrologer-section.component';

describe('AstrologerSectionComponent', () => {
  let component: AstrologerSectionComponent;
  let fixture: ComponentFixture<AstrologerSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstrologerSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstrologerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
