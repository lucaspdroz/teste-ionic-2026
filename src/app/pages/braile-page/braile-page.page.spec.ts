import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrailePagePage } from './braile-page.page';

describe('BrailePagePage', () => {
  let component: BrailePagePage;
  let fixture: ComponentFixture<BrailePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BrailePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
