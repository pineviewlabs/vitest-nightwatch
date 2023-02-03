import { beforeEach, afterEach } from 'vitest'
import {createClient} from 'nightwatch'
import {setup} from '@nightwatch/vue'

const globalSetup = async (options = {}) => {
  return createClient(Object.assign({}, {
    browserName: 'chrome',
    parallel: true,
    enable_global_apis: true,
    always_async_commands: false,
    persist_globals: true,
    silent: true,
    headless: true,
    output: true,
    globals: {
      onBrowserNavigate(browser) {
        console.log('onBrowserNavigate')
      }
    }
  }, options));
}

beforeEach(async (context) => {
  // extend context
  context.viteServer = await setup({
    vite_dev_server: {
      port: null
    }
  });

  const client = await globalSetup({
    launchUrl: `http://localhost:${context.viteServer.config.server.port}`
  });

  context.browser = await client.launchBrowser();
})

afterEach(async ({browser, viteServer}) => {
  await browser.end()
  await viteServer.close();
});