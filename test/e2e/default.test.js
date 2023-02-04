import { describe, test } from 'vitest'
import * as B from '../index.js';

describe('counter end-to-end test', async () => {
  test('should change count when button clicked', async ({browser}) => {
    await browser.init();
    await browser.waitForElementVisible('body')

    const button = await browser.getByRole('button');

    await browser.expect.element(button).to.have.text.that.equals('count is 0');
    await browser.click(button)

    await browser.expect.element(button).to.have.text.that.equals('count is 1');

    //await browser.pause(100000);
  }, 120_000)


});
