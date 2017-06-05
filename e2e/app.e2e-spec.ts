import { DtfsbuAngularPage } from './app.po';

describe('dtfsbu-angular App', function() {
  let page: DtfsbuAngularPage;

  beforeEach(() => {
    page = new DtfsbuAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
