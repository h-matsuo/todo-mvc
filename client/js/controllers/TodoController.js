import TodoCollection from '../models/TodoModel.js';
import Todo from '../views/Todo.js';
import TodoForm from '../views/TodoForm.js';

const TodoController = {
  views: [],

  async create(name) {
    const todo = await TodoCollection.create(name);
    const view = new Todo({ ...todo });
    view.mount();
  },

  async update(id, done) {
    await TodoCollection.update(id, done);
  },

  async delete(id) {
    await TodoCollection.delete(id);
  },

  async render() {
    const todos = await TodoCollection.read();
    this.views = todos.map(todo => {
      const view = new Todo({ ...todo });
      view.mount();
      return view;
    });

    const form = new TodoForm();
    form.mount();
  }
};
export default TodoController;
