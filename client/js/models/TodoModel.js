class TodoModel {
  constructor({ id, name, done }) {
    this.id = id;
    this.name = name;
    this.done = done;
  }
}

const TodoCollection = {
  todos: [
    {
      "name": "sample",
      "done": false
    }
  ],
  // Rails で言うところの Model.all
  async read() {
    const resp = await fetch('/todos').then(res => res.json());
    this.todos = resp.todos.map(todo => {
      return new TodoModel({ ...todo });
    })
    return this.todos;
  }
}

export default TodoCollection;
