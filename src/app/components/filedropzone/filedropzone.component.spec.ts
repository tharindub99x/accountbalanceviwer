import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiledropzoneComponent } from './filedropzone.component';

describe('FiledropzoneComponent', () => {
  let component: FiledropzoneComponent;
  let fixture: ComponentFixture<FiledropzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiledropzoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiledropzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
