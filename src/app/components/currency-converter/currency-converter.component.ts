import {Component, computed, inject, model, ModelSignal, OnInit} from '@angular/core';
import {CurrencyConverterService} from "./currency-converter.service";
import {FormsModule} from "@angular/forms";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [
    FormsModule,
    DecimalPipe
  ],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss'
})
export class CurrencyConverterComponent {
  currencyConverterService = inject(CurrencyConverterService);

  originalValue: ModelSignal<number> = model(100);
  variableRate: ModelSignal<number> = this.currencyConverterService.variableRate;
  fixRate: ModelSignal<number> = model(1.5);
  applicableRate = computed(() => {
    if (this.variation() > 2) {
      return this.variableRate();
    } else {
      return this.fixRate()
    }
  });

  variation = computed(() => {
    const fromFixRateValue = this.originalValue() * this.fixRate();
    const fromVariableRateValue = this.originalValue() * this.variableRate();
    const variation = 3;
    return variation;
  })
  convertedValue = computed(() => this.originalValue() * this.applicableRate());

  constructor() {
  }
}
