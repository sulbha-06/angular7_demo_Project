import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildArticleComponent } from './child-article.component';

describe('ChildArticleComponent', () => {
  let component: ChildArticleComponent;
  let fixture: ComponentFixture<ChildArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
