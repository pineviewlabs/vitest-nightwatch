import {setup} from '@nightwatch/vue'

export default {
  async beforeEach(browser, done) {
    // extend context
    this.viteServer = await setup({
      vite_dev_server: {
        port: null
      }
    });

    browser.launchUrl = `http://localhost:${this.viteServer.config.server.port}`
    done();
    //context.browser = await client.launchBrowser();
  },

  async afterEach(browser, done) {
    //await browser.end()
    await this.viteServer.close();
    done();
  }
}
