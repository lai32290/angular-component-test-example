import { ComponentTestPage } from './app.po';

describe('component-test App', () => {
  let page: ComponentTestPage;

  beforeEach(() => {
    page = new ComponentTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
