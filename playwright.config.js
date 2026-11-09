// テストのときは、このフォルダを小さなサーバーで配信して開く
module.exports = {
  testDir: './tests',
  use: { baseURL: 'http://localhost:4173', viewport: { width: 1280, height: 860 } },
  webServer: { command: 'npx http-server -p 4173 -c-1 .', port: 4173, reuseExistingServer: true },
};
