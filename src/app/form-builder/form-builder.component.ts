import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  @Input()
  col: number;
  @Input()
  inputControls:any;
  
  constructor() { }

  ngOnInit() {
  }

}