import {Component, input, InputSignal} from '@angular/core';
import {AgGridAngular} from "ag-grid-angular";
import {ColDef} from "ag-grid-community";

@Component({
  selector: 'app-currency-converter-history',
  standalone: true,
  imports: [
    AgGridAngular
  ],
  templateUrl: './currency-converter-history.component.html',
  styleUrl: './currency-converter-history.component.scss'
})
export class CurrencyConverterHistoryComponent {
  colDefs: ColDef[] = [
    { field: "realRate" },
    { field: "fixedRate" },
    { field: "initialValue" },
    { field: "convertedValue" }
  ];

  history= input([])

}
