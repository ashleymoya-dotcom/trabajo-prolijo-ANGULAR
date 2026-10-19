import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Pelicula {
  id: number;
  titulo: string;
  poster: string | null;
  duracion: string;
  descripcion: string;
}

@Component({
  selector: 'app-pelicula-card',
  standalone: true,
  template: `
    <button class="movie" type="button" [attr.aria-label]="'Ver detalles de ' + pelicula.titulo" (click)="seleccionar.emit(pelicula)">
      <span class="movie__image">
        @if (pelicula.poster) {
          <img [src]="pelicula.poster" alt="" loading="lazy" />
        } @else {
          <span class="movie__placeholder">Sin póster</span>
        }
      </span>
      <span class="movie__text">
        <span class="movie__title">{{ pelicula.titulo }}</span>
        <span class="movie__duration">{{ pelicula.duracion }}</span>
      </span>
    </button>
  `,
})
export class PeliculaCard {
  @Input({ required: true }) pelicula!: Pelicula;
  @Output() seleccionar = new EventEmitter<Pelicula>();
}
