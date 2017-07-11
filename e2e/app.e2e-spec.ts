import { AngularWordCloudDemoPage } from './app.po';

describe('angular-word-cloud-demo App', () => {
  let page: AngularWordCloudDemoPage;

  beforeEach(() => {
    page = new AngularWordCloudDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to atc!!');
  });
});
