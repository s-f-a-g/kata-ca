import {computed, effect, Injectable, model, ModelSignal} from '@angular/core';
import {interval} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  variableRate: ModelSignal<number> = model(1.1)

  constructor() {
    effect(() => interval(3000)
      .pipe()
      .subscribe(_ => {
        this.updateVariableRate();
      })
    )
  }

  updateVariableRate(): void {
    const min = -0.05;
    const max = +0.05;
    const newRate = ((Math.random() * max) + (Math.random() * min)) + 1;
    console.log('newRate', newRate);
    this.variableRate.set(newRate);
  }
}
