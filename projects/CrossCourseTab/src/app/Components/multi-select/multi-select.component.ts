import {Component, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import {RatesService} from "../../Services/rates.service";

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {
  @ViewChild ('sel') sel;

  options= [];
  chosenCurrencies = [];
  constructor(private ratesService: RatesService) { }

  ngOnInit(): void {
    this.ratesService.ratesSubject
      .subscribe((res: any) => this.options = Object.keys(res));
  }

  getChoice(){
    this.chosenCurrencies =
      Array.prototype.filter.call(this.sel.nativeElement.options, opt=>opt.selected).map(opt=>opt.value);
    this.ratesService.choiceSubject.next(this.chosenCurrencies);
  }

}
