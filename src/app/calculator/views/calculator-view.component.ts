import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorComponent } from '@calculator/components/calculator.component';

@Component({
  selector: 'calculator-view',
  imports: [CalculatorComponent],
  template: `
    <div class="w-full rounded-3xl bg-black p-6 shadow-[0_0_30px_rgba(0,0,0,0.6)] border border-gray-800">
      <calculator />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalculatorViewComponent { }
