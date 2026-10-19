import { Component, computed, HostListener, OnInit, signal } from '@angular/core';
import { Pelicula, PeliculaCard } from './pelicula-card';

@Component({
  selector: 'app-cartelera',
  standalone: true,
  imports: [PeliculaCard],
  template: `
    <section id="cartelera" class="cartelera" aria-labelledby="cartelera-title">
      <div class="section-heading">
        <h2 id="cartelera-title">Cartelera</h2>
        <p>Descubre qué ver en tu próxima visita.</p>
      </div>

      @if (cargando()) {
        <p>Cargando cartelera...</p>
      } @else if (peliculas().length === 0) {
        <p>No hay películas disponibles.</p>
      } @else {
        <div class="carousel">
          <button class="arrow" type="button" aria-label="Película anterior" [disabled]="pagina() === 0" (click)="anterior()">&#8592;</button>
          <div class="movies" aria-live="polite">
            @for (pelicula of visibles(); track pelicula.id) {
              <app-pelicula-card [pelicula]="pelicula" (seleccionar)="abrirDetalle($event, detalle)" />
            }
          </div>
          <button class="arrow" type="button" aria-label="Película siguiente" [disabled]="pagina() >= peliculas().length - columnas()" (click)="siguiente()">&#8594;</button>
        </div>
      }

      <dialog #detalle class="movie-dialog" aria-labelledby="movie-dialog-title">
        @if (peliculaSeleccionada(); as pelicula) {
          <div class="movie-dialog__content">
            @if (pelicula.poster) {
              <img [src]="pelicula.poster" [alt]="'Póster de ' + pelicula.titulo" />
            }
            <div>
              <h2 id="movie-dialog-title">{{ pelicula.titulo }}</h2>
              <p class="movie-dialog__runtime">{{ pelicula.duracion }}</p>
              <p>{{ pelicula.descripcion || 'La descripción de esta película no está disponible.' }}</p>
              <button type="button" (click)="detalle.close()">Cerrar</button>
            </div>
          </div>
        }
      </dialog>
    </section>
  `,
})
export class Cartelera implements OnInit {
  readonly apiKey = '0f97f356ce765e21b9caae3a52477bc5';
  readonly peliculas = signal<Pelicula[]>([]);
  readonly cargando = signal(true);
  readonly peliculaSeleccionada = signal<Pelicula | null>(null);
  readonly pagina = signal(0);
  readonly columnas = signal(this.obtenerColumnas());
  readonly visibles = computed(() => {
    const inicio = this.pagina();
    return this.peliculas().slice(inicio, inicio + this.columnas());
  });

  async ngOnInit() {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=es-ES&region=BO&page=1`
    );
    const lista: { results: { id: number; title: string; poster_path: string | null; overview: string }[] } = await respuesta.json();
    const primerasPeliculas = lista.results.slice(0, 6);
    const resultado = await Promise.all(
      primerasPeliculas.map(async (pelicula) => {
        const respuestaDetalle = await fetch(
          `https://api.themoviedb.org/3/movie/${pelicula.id}?api_key=${this.apiKey}&language=es-ES`
        );
        const detalle: { runtime: number | null } = await respuestaDetalle.json();
        const horas = Math.floor((detalle.runtime || 0) / 60);
        const minutos = (detalle.runtime || 0) % 60;

        return {
          id: pelicula.id,
          titulo: pelicula.title,
          poster: pelicula.poster_path ? `https://image.tmdb.org/t/p/w500${pelicula.poster_path}` : null,
          duracion: detalle.runtime ? `${horas} h ${String(minutos).padStart(2, '0')} min` : 'Duración no disponible',
          descripcion: pelicula.overview,
        };
      })
    );

    this.peliculas.set(resultado);
    this.cargando.set(false);
  }

  @HostListener('window:resize')
  alCambiarTamano() {
    this.columnas.set(this.obtenerColumnas());
    this.pagina.update((valor) => Math.min(valor, Math.max(0, this.peliculas().length - this.columnas())));
  }

  anterior() {
    this.pagina.update((valor) => Math.max(0, valor - 1));
  }

  siguiente() {
    this.pagina.update((valor) => Math.min(this.peliculas().length - this.columnas(), valor + 1));
  }

  abrirDetalle(pelicula: Pelicula, modal: HTMLDialogElement) {
    this.peliculaSeleccionada.set(pelicula);
    modal.showModal();
  }

  private obtenerColumnas() {
    if (window.innerWidth <= 672) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
  }
}
