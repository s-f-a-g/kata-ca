import {effect, Injectable, model, ModelSignal} from '@angular/core';
import {interval} from "rxjs";

export type History = { realRate: number, fixedRate: number, initialValue: number, convertedValue: number };

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  variableRate: ModelSignal<number> = model(1.1)
  history: ModelSignal<History[] |any> = model([]);

  constructor() {
    effect(() => interval(3000)
      .pipe(
      )
      .subscribe(_ => {
        this.updateVariableRate();
        this.updateHistory();
      })
    )
  }

  private updateVariableRate(): void {
    const min = -0.05;
    const max = +0.05;
    const newRate = ((Math.random() * max) + (Math.random() * min)) + 1;
    this.variableRate.set(newRate);
  }

  updateHistory(): void {
    const newHistory: History[] = [...this.history(), ({ realRate: 1, fixedRate: 1.02, initialValue: 100, convertedValue: 122 })];
    this.history.set(newHistory)
  }

}
