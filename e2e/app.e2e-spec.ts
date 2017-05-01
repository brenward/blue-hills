import { BlueHillsPage } from './app.po';

describe('blue-hills App', () => {
  let page: BlueHillsPage;

  beforeEach(() => {
    page = new BlueHillsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
