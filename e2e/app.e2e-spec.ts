import { ServerAppPage } from './app.po';

describe('server-app App', () => {
  let page: ServerAppPage;

  beforeEach(() => {
    page = new ServerAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
