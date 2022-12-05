import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProprietaireComponent } from './liste-proprietaire.component';

describe('ListeProprietaireComponent', () => {
  let component: ListeProprietaireComponent;
  let fixture: ComponentFixture<ListeProprietaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeProprietaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
