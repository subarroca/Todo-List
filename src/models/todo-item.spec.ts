import { TodoItem } from './todo-item';
import { TodoStatus } from './todo-status.enum';


describe('Model: TodoItem', () => {
  it('initialises with a title', () => {
    const item = new TodoItem({
      title: 'item'
    });

    expect(item.title).toEqual('item');
  });

  it('is done if declared', () => {
    const item = new TodoItem({
      title: 'item',
      status: TodoStatus.DONE
    });

    expect(item.status).toEqual(TodoStatus.DONE);
  });

  it('is marked as TODO by default', () => {
    const item = new TodoItem({
      title: 'item'
    });

    expect(item.status).toEqual(TodoStatus.TODO);
  });

  it('has a current timestamp', () => {
    const item = new TodoItem({
      title: 'item'
    });

    // TODO: this is not nice, find a better way to check current timestamp
    expect(Date.now() - +item.createdAt).toBeLessThan(1000);
  });

  it('toggles from TODO to DONE', () => {
    const item = new TodoItem({
      title: 'item',
      status: TodoStatus.TODO
    });

    item.toggle();

    expect(item.status).toBe(TodoStatus.DONE);
  });

  it('toggles from DONE to TODO', () => {
    const item = new TodoItem({
      title: 'item',
      status: TodoStatus.DONE
    });

    item.toggle();

    expect(item.status).toBe(TodoStatus.TODO);
  });
})