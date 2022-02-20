import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaStartWarsComponent } from './tabela-start-wars.component';

describe('TabelaStartWarsComponent', () => {
  let component: TabelaStartWarsComponent;
  let fixture: ComponentFixture<TabelaStartWarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaStartWarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaStartWarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
