import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() array;
  @Output() selValue =new EventEmitter();

  val;
  constructor() { }

  ngOnInit(): void {
    this.val = this.array[0];
  }

  getValue(){
    this.selValue.emit(this.val);
  }

}
