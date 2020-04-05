export interface SectionI {
  name: string;
  questions: QuestionI[];
  options: ['Yes', 'No', 'N/A'];
}

export interface QuestionI {
  text: string;
  answer?: 'Yes' | 'No' | 'N/A';
}
