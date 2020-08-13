import {Component, Input, OnInit} from '@angular/core';
import {RatesService} from "../../Services/rates.service";

@Component({
  selector: 'app-cross-course',
  templateUrl: './cross-course.component.html',
  styleUrls: ['./cross-course.component.css']
})
export class CrossCourseComponent implements OnInit {

  rates;
  currList = [];
  constructor(private ratesService: RatesService) { }

  ngOnInit(): void {
    this.ratesService.ratesSubject.subscribe((res: any) => this.rates = res);
    this.ratesService.choiceSubject.subscribe((res:any) => this.currList=res);
  }
}
