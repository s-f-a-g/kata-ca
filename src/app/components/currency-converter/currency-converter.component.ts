import {Component, computed, inject, model, ModelSignal, OnInit, signal, WritableSignal} from '@angular/core';
import {CurrencyConverterService} from "./currency-converter.service";
import {FormsModule} from "@angular/forms";
import {CurrencyPipe, DecimalPipe} from "@angular/common";

export type Currency = 'EUR' | 'USD';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [
    FormsModule,
    DecimalPipe,
    CurrencyPipe
  ],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss'
})
export class CurrencyConverterComponent {
  currencyConverterService = inject(CurrencyConverterService);

  originalValue: ModelSignal<number> = model(100);
  variableRate: ModelSignal<number> = this.currencyConverterService.variableRate;
  fixRate: ModelSignal<number> = model(1.02);
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
    return Math.abs(100 -((fromFixRateValue / fromVariableRateValue) *100));
  })
  convertedValue = computed(() => this.originalValue() * this.applicableRate());
  selectedCurrency: WritableSignal<Currency> = signal('EUR');

  constructor() {
  }

  toggleCurrency() {
    const newCurrency = this.selectedCurrency() === 'EUR' ? 'USD' : 'EUR';
    this.originalValue.set(this.convertedValue());
    this.selectedCurrency.set(newCurrency);
  }
}
