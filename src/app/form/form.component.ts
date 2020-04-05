import { Component, OnInit, Input } from '@angular/core';
import { SectionI, QuestionI } from 'src/models/section';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() section: SectionI;
  @Input() formName: string;

  public sectionForm;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    const group = {};
    this.section.questions.forEach((question: QuestionI) => {
      group[question.text] = new FormControl('');
    });
    this.sectionForm = this.formBuilder.group(group);
  }

  showMeValue(event: any): void {
    console.log(event);
  }

}
