"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angular2_1 = require('angular2/angular2');
var TodoAppComponent = (function () {
    function TodoAppComponent() {
        this.todos = [{ text: "Try Second", done: true }];
    }
    TodoAppComponent.prototype.get = function () {
        return this.todos;
    };
    TodoAppComponent.prototype.add = function ($event, newtodo) {
        if ($event.which === 13) {
            this.todos.unshift({ text: newtodo.value, done: false });
            newtodo.value = '';
        }
    };
    TodoAppComponent.prototype.markAsDone = function (todo) {
        todo.done = !todo.done;
    };
    TodoAppComponent = __decorate([
        angular2_1.Component({
            selector: "my-app",
        }),
        angular2_1.View({
            templateUrl: 'mainForm.html',
            directives: [angular2_1.NgFor]
        })
    ], TodoAppComponent);
    return TodoAppComponent;
}());
angular2_1.bootstrap(TodoAppComponent);
//# sourceMappingURL=app.js.map