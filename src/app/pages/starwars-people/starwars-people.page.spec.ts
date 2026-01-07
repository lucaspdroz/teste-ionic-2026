import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarwarsPeoplePage } from './starwars-people.page';

describe('StarwarsPeoplePage', () => {
  let component: StarwarsPeoplePage;
  let fixture: ComponentFixture<StarwarsPeoplePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StarwarsPeoplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
