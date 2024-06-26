import {computed, Injectable, model, ModelSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  variableRate: ModelSignal<number> = model(1.1)
  constructor() { }
}
