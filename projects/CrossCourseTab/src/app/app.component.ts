import {Component, OnInit} from '@angular/core';
import {HttpService} from "./Services/http.service";
import {RatesService} from "./Services/rates.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private httpService: HttpService,
              private ratesService: RatesService){}

  ngOnInit(): void {
    this.httpService.getRates()
      .subscribe((res: any)=>this.ratesService.ratesSubject.next(res.rates))
  }

}
