import { Component } from '@angular/core';
import { InicioPage } from './inicio-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InicioPage],
  template: '<app-inicio-page />',
})
export class App {}
