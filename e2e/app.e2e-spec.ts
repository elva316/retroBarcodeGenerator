import { RetroBarcodeGeratorPage } from './app.po';

describe('retro-barcode-gerator App', () => {
  let page: RetroBarcodeGeratorPage;

  beforeEach(() => {
    page = new RetroBarcodeGeratorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
