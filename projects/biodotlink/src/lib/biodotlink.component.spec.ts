import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiodotlinkComponent } from './biodotlink.component';

describe('BiodotlinkComponent', () => {
  let component: BiodotlinkComponent;
  let fixture: ComponentFixture<BiodotlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiodotlinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiodotlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
