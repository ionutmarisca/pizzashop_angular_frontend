import { FinalMppExamPage } from './app.po';

describe('final-mpp-exam App', () => {
  let page: FinalMppExamPage;

  beforeEach(() => {
    page = new FinalMppExamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
