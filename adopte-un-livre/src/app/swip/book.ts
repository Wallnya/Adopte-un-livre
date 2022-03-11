export class Book {
  id: number | undefined;
  picture: string = '';
  author: string = '';
  name: string = '';
  genre1: string = '';
  genre2?: string;
  genre3?: string;
  summary: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
