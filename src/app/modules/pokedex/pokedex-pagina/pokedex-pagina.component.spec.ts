import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexPaginaComponent } from './pokedex-pagina.component';

describe('PokedexPaginaComponent', () => {
  let component: PokedexPaginaComponent;
  let fixture: ComponentFixture<PokedexPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexPaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
