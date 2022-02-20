export class Book {
  id: number = 1;
  picture: string = '';
  author: string = '';
  name: string = '';
  genre1: string = '';
  genre2?: string;
  genre3?: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
