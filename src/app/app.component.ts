import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <div class="min-w-screen min-h-screen bg-gradient-to-b from-gray-950 to-black flex items-center justify-center px-5 py-5">
    <router-outlet/>
  </div>`,
})
export class AppComponent {
  title = 'zoneless-calculator';
}
