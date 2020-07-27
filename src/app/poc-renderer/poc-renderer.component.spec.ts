import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocRendererComponent } from './poc-renderer.component';

describe('PocRendererComponent', () => {
  let component: PocRendererComponent;
  let fixture: ComponentFixture<PocRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
