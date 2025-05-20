# YouTube チャンネル分析ツール

この Google Apps Script（GAS）プロジェクトは、YouTube Data API と YouTube Analytics API を使用して、YouTube チャンネルの詳細な分析を行うツールです。

## 機能

- **基本チャンネル分析**: チャンネルの基本情報と主要指標を表示
- **動画別パフォーマンス分析**: 個々の動画のパフォーマンスデータを分析
- **視聴者層分析**: 視聴者の地域、デバイス、年齢層などの詳細を分析
- **エンゲージメント分析**: 高評価、コメント、共有などのエンゲージメント指標を分析
- **トラフィックソース分析**: どのようなルートで視聴者が動画にたどり着いているかを分析
- **AI による改善提案**: 分析データに基づいて、チャンネル成長のための具体的な提案を生成

## セットアップ方法

1. **API キーの設定**: 「YouTube 分析」メニューから「API キー設定」を選択し、Google Cloud Console の YouTube Data API キーを入力
2. **OAuth 認証の設定**: 「YouTube 分析」メニューから「OAuth 認証再設定」を選択し、画面の指示に従って認証を完了
3. **チャンネル ID の入力**: ダッシュボードシートの入力欄にチャンネル ID または@ハンドルを入力

## 使用方法

1. スプレッドシートを開くと自動的にダッシュボードが初期化されます
2. 「YouTube 分析」メニューから必要な分析機能を選択して実行します
3. 「ワンクリック完全分析」を選択すると、すべての分析モジュールを一度に実行できます

## 開発情報

- 言語: Google Apps Script (JavaScript)
- API: YouTube Data API v3, YouTube Analytics API

## 注意事項

- このツールは、YouTube API のクォータ制限内で動作するように設計されていますが、過度に頻繁な使用はクォータ制限に達する可能性があります
- 詳細な分析データは、チャンネル所有者として OAuth 認証を行った場合のみ取得できます
- データの取得には時間がかかる場合があります。特に多くの動画を持つチャンネルでは、処理に時間がかかることがあります
- セキュリティ上の理由から、OAuth 認証情報（Client ID と Client Secret）はスクリプトプロパティに保存してください。直接コード内に記述しないでください

## セキュリティ設定

1. スクリプトエディタで「プロジェクトの設定」を開く
2. 「スクリプトプロパティ」タブを選択
3. 以下のプロパティを追加：
   - `OAUTH_CLIENT_ID`: Google Cloud Console の OAuth Client ID
   - `OAUTH_CLIENT_SECRET`: Google Cloud Console の OAuth Client Secret

## Git/GitHub での管理

1. **重要**: 認証情報（API キー、OAuth Client ID/Secret）は絶対にコードに直接記述しないでください
2. `.gitignore`ファイルを作成して機密情報を含むファイルを除外することを検討してください
3. Git リポジトリに追加する際は以下のコマンドを使用してください：
   ```
   git add .
   git commit -m "コミットメッセージ"
   git push origin main
   ```
4. `appsscript.json`ファイルも Git で追跡するようにしてください：
   ```
   git add appsscript.json
   ```
