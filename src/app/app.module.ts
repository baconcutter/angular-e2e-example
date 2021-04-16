import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoItemsPageComponent } from './todo-items-page/todo-items-page.component';
import { DoneItemsPageComponent } from './done-items-page/done-items-page.component';
import { TodoItemsService } from './todo-items.service';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { AddTodoItemComponent } from './add-todo-item/add-todo-item.component';

const routes = [
  { path: '', component: TodoItemsPageComponent },
  { path: 'done-items', component: DoneItemsPageComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    TodoItemsPageComponent,
    DoneItemsPageComponent,
    TodoItemsComponent,
    AddTodoItemComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TodoItemsService],
})
export class AppModule {}
