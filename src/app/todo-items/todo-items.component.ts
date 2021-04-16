import { Component, Input } from '@angular/core';
import { TodoItemsService, Item } from '../todo-items.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
})
export class TodoItemsComponent {
  constructor(private todoItemsService: TodoItemsService) {}

  get items(): Array<Item> {
    return this.todoItemsService.getFilteredItems(this.done);
  }

  @Input()
  done = false;

  removeItem(id: number): void {
    this.todoItemsService.removeItem(id);
  }

  toggleDone(id: number): void {
    this.todoItemsService.toggleDone(id);
  }
}
