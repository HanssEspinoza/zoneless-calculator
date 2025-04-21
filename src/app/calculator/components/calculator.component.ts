import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'calculator',
  imports: [],
  template: `
    <!-- Display -->
    <div class="text-right text-4xl text-gray-300 font-light mb-6 px-5 py-6 bg-gray-900 rounded-xl min-h-[90px] flex items-end justify-end">
        8x9
      </div>

      <!-- Buttons -->
      <div class="grid grid-cols-4 gap-4">
        <button class="aspect-square w-full rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition">C</button>
        <button class="aspect-square w-full rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition">+/-</button>
        <button class="aspect-square w-full rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition">%</button>
        <button class="aspect-square w-full rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition">/</button>

        <button class="aspect-square w-full rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">7</button>
        <button class="aspect-square w-full rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">8</button>
        <button class="aspect-square w-full rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">9</button>
        <button class="aspect-square w-full rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition">*</button>

        <button class="aspect-square w-full rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">4</button>
        <button class="aspect-square w-full rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">5</button>
        <button class="aspect-square w-full rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">6</button>
        <button class="aspect-square w-full rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition">-</button>

        <button class="aspect-square w-full rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">1</button>
        <button class="aspect-square w-full rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">2</button>
        <button class="aspect-square w-full rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">3</button>
        <button class="aspect-square w-full rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition">+</button>

        <button class="aspect-square w-full rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">.</button>
        <button class="aspect-square w-full rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">0</button>
        <button class="col-span-2 h-14 w-full rounded-lg bg-teal-700 text-white hover:bg-teal-600 transition">=</button>
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent { }
