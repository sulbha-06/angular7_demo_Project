import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterModelFormComponent } from './register-model-form.component';

describe('RegisterModelFormComponent', () => {
  let component: RegisterModelFormComponent;
  let fixture: ComponentFixture<RegisterModelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterModelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
