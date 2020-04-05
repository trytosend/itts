import { Component, OnInit, Input } from '@angular/core';
import { SectionI } from 'src/models/section';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() section: SectionI;
  @Input() formName: string;

  constructor() { }

  ngOnInit(): void {
  }

  showMeValue(event: any): void {
    console.log(event);
  }

}
