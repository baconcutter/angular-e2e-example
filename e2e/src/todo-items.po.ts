import { by, element, ElementFinder } from 'protractor';

export class TodoItemsPage {
  getPageLink(): ElementFinder {
    return element(by.css('.page-link'));
  }
}
