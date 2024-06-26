import { Component } from '@angular/core';
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
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ];

  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

}
