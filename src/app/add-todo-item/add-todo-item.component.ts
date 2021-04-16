import { Component } from '@angular/core';
import { TodoItemsService } from '../todo-items.service';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css'],
})
export class AddTodoItemComponent {
  constructor(private todoItemsService: TodoItemsService) {}

  text = '';

  addTodo(): void {
    this.todoItemsService.addItem(this.text);
  }
}
