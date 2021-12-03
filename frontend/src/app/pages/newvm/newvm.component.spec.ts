import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewvmComponent } from './newvm.component';

describe('NewvmComponent', () => {
  let component: NewvmComponent;
  let fixture: ComponentFixture<NewvmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewvmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
