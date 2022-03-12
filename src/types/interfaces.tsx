export interface FormField {
  id: number;
  label: string;
  type: string;
  value: string;
}
export interface FormData {
  id: number;
  title: string;
  formFields: FormField[];
}

export interface Answer {
  id: number;
  value: string;
}
