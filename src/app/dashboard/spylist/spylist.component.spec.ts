import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpylistComponent } from './spylist.component';

describe('SpylistComponent', () => {
  let component: SpylistComponent;
  let fixture: ComponentFixture<SpylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
