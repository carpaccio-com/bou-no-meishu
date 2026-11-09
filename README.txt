棒の盟主　公開用ファイル一式
================================
index.html            ゲームのページ（OGP・アプリ化の設定入り）
style.css             見た目
game.js               ゲームの中身
manifest.webmanifest  スマホのホーム画面に置くための設定
sw.js                 オフラインで遊べるようにする仕組み
icons/                アイコン（192×192、512×512）
ogp.png               SNSで共有したときの画像（1200×630）
itch-cover.png        itch.io のカバー画像（630×500）
package.json など      自動テスト用の設定（.github/ は GitHub Actions 用）
tests/                自動テスト（Playwright）

公開の手順は「棒の盟主_公開手順書.docx」を見てください。
index.html の og:url と og:image は https://carpaccio-com.github.io/bou-no-meishu/ に設定済みです。
