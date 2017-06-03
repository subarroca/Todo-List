import { TodoItem } from './todo-item';



export class TodoSection {
  title: string;
  items: TodoItem[];

  constructor(options: {
    title: string,
    items?: TodoItem[]
  }) {
    if (options) {
      this.title = options.title;
      this.items = (options.items || []).map(item => new TodoItem(item));
    }
  }

  flush() {
    this.items = [];
  }

  addItem(item: TodoItem) {
    this.items.push(item);
  }

  removeItem(item: TodoItem) {
    this.items = this.items
      .filter(localItem => !Object.is(item, localItem));
  }

  get orderedItems() {
    return this.items.sort((a, b) => +a.createdAt > +b.createdAt ? -1 : 1);
  }
}