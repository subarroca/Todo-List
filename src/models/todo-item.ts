import { TodoStatus } from "./todo-status.enum";

export class TodoItem {
  title: string;
  status: number;
  createdAt: Date;

  constructor(options: {
    title: string,
    status?: number
  }) {
    if (options)
      this.title = options.title;
    this.status = options.status || TodoStatus.TODO;
    this.createdAt = new Date();
  }

  toggle() {
    if (this.status === TodoStatus.TODO) {
      this.status = TodoStatus.DONE;
    } else {
      this.status = TodoStatus.TODO;
    }
  }

  get done() {
    return this.status === TodoStatus.DONE;
  }
}