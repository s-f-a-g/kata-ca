import {computed, effect, Injectable, model, ModelSignal} from '@angular/core';
import {interval} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  variableRate: ModelSignal<number> = model(1.1)

  constructor() {
    effect(() => interval(10000)
      .pipe(
      )
      .subscribe(_ => {
        this.updateVariableRate();
      })
    )
  }

  updateVariableRate(): void {
    const min = -0.05;
    const max = +0.05;
    const newRate = ((Math.random() * max) + (Math.random() * min)) + 1;
    this.variableRate.set(newRate);
  }
}
