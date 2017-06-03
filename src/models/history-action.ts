export class HistoryAction {
  title: string;
  createdAt: Date;

  constructor(options: {
    title: string
  }) {
    if (options) {
      this.title = options.title;
      this.createdAt = new Date();
    }
  }
}