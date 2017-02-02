import { AppXap1Page } from './app.po';

describe('app-xap1 App', function() {
  let page: AppXap1Page;

  beforeEach(() => {
    page = new AppXap1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
