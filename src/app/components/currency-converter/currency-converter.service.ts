import {effect, Injectable, model, ModelSignal} from '@angular/core';
import {interval} from "rxjs";

export type History = { realRate: number, fixedRate: number, initialValue: number, convertedValue: string };

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  variableRate: ModelSignal<number> = model(1.1)
  // history: ModelSignal<History[]> = model([]); // Add any to compile but in real life I would reject merge request with that. Reached the 2 hours

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
   /* const newHistory: History[] = [...this.history(), ({ realRate: 1, fixedRate: 1.02, initialValue: 100, convertedValue: 122 })];
    this.history.set(newHistory)*/
  }

}
