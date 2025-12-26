import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { PRIMENG_ES } from './i18n/primeng-es';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend_leadcenter');

  private primengConfig = inject(PrimeNG)

  ngOnInit(): void {
    this.primengConfig.setTranslation(PRIMENG_ES);
  }

}
