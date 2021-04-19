import { browser, logging } from 'protractor';
import { AppPage } from './app.po';
import { TodoItemsPage } from './todo-items.po';

describe('Homepage', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should be the Todo items page', async () => {
    await page.navigateTo();
    expect(await page.getHeadingText()).toEqual('Todo');
  });

  describe('When the "show done items" link is clicked', () => {
    let todoItemsPage: TodoItemsPage;

    beforeEach(async () => {
      todoItemsPage = new TodoItemsPage();
      await todoItemsPage.getPageLink().click();
    });

    it('Then the Done items page should be visible', async () => {
      expect(await page.getHeadingText()).toEqual('Done Items');
    });
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
