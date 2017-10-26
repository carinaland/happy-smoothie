import { SmothiesPage } from './app.po';

describe('smothies App', () => {
  let page: SmothiesPage;

  beforeEach(() => {
    page = new SmothiesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
