import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <img
      class="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59ikypIWYJf5gKu3yWGNkwR4YHR0Id7V7qzGS3iG8wjantKnFJ2PSC7nV&s=10"
      alt="Multicine"
    />
  `,
})
export class Logo {}
