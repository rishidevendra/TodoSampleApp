import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
    selector: "my-app",
   
})

@View({
    templateUrl: 'mainForm.html',
    directives: [NgFor]
})

class TodoAppComponent {

    todos: Array<Object>;

    constructor() {
        this.todos = [{ text: "Try Second", done: true }] 
    }

    get() {
        return this.todos;
    }

    add($event, newtodo) {

        if ($event.which === 13) {
            this.todos.unshift({ text: newtodo.value, done: false });
            newtodo.value = ''
        }

    }

    markAsDone(todo) {
        todo.done = !todo.done;
    }

}

bootstrap(TodoAppComponent);
