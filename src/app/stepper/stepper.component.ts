import { Component, OnInit } from '@angular/core';
import { Data } from 'data/questions';
import { SectionI } from 'src/models/section';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  public sections: SectionI[] = Data.sections;

  constructor() { }

  ngOnInit(): void {
    console.log(this.sections);
  }

}
