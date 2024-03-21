// errors.js
class TodoIdNullError extends Error {
    constructor(todo_id, content) {
        super();
        this.name = this.constructor.name;

        this.message = `Invalid Todo id provided - ${todo_id})`;
        this.statusCode = 500;
    }
}

class TodoNotFoundError extends Error {
    constructor(todo_id, content) {
        super();
        this.name = this.constructor.name;

        this.message = `Todo not found - ${todo_id})`;
        this.statusCode = 500;
    }
}

module.exports = {
    TodoIdNullError,
    TodoNotFoundError
}