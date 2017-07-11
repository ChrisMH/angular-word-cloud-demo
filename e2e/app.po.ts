import { browser, by, element } from 'protractor';

export class AngularWordCloudDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('atc-root h1')).getText();
  }
}
