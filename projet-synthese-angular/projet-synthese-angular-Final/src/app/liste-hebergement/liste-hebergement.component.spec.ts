import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeHebergementComponent } from './liste-hebergement.component';

describe('ListeHebergementComponent', () => {
  let component: ListeHebergementComponent;
  let fixture: ComponentFixture<ListeHebergementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeHebergementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeHebergementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
