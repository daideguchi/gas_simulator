/**
 * YouTube チャンネル分析ツールのサンプルコード
 * 環境変数の使用例を示しています
 */

/**
 * YouTube Data APIを使用してチャンネル情報を取得する関数
 * @param {string} channelId - YouTube チャンネルID
 * @return {Object} チャンネル情報
 */
function getChannelInfo(channelId) {
  // 環境変数からAPIキーを取得
  const apiKey = getYouTubeApiKey();

  // YouTube Data APIのエンドポイント
  const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`;

  try {
    // APIリクエストを送信
    const response = UrlFetchApp.fetch(url);
    const data = JSON.parse(response.getContentText());

    return data;
  } catch (error) {
    console.error("チャンネル情報の取得に失敗しました:", error);
    throw error;
  }
}

/**
 * OAuth認証を使用してYouTube Analytics APIにアクセスする関数
 */
function initializeOAuth() {
  // 環境変数からOAuth認証情報を取得
  const credentials = getOAuthCredentials();

  // OAuth2サービスを設定
  const oauthService = OAuth2.createService("youtube")
    .setAuthorizationBaseUrl("https://accounts.google.com/o/oauth2/auth")
    .setTokenUrl("https://accounts.google.com/o/oauth2/token")
    .setClientId(credentials.clientId)
    .setClientSecret(credentials.clientSecret)
    .setCallbackFunction("authCallback")
    .setPropertyStore(PropertiesService.getUserProperties())
    .setScope("https://www.googleapis.com/auth/youtube.readonly");

  return oauthService;
}

/**
 * OAuth認証のコールバック関数
 * @param {Object} request - リクエストオブジェクト
 * @return {HtmlOutput} 認証結果を表示するHTMLページ
 */
function authCallback(request) {
  const oauthService = initializeOAuth();
  const isAuthorized = oauthService.handleCallback(request);

  if (isAuthorized) {
    return HtmlService.createHtmlOutput(
      "認証に成功しました。このページを閉じて、スクリプトに戻ってください。"
    );
  } else {
    return HtmlService.createHtmlOutput(
      "認証に失敗しました。もう一度お試しください。"
    );
  }
}

/**
 * 認証URLを取得する関数
 */
function getAuthorizationUrl() {
  const oauthService = initializeOAuth();
  const authUrl = oauthService.getAuthorizationUrl();
  console.log("以下のURLにアクセスして認証を行ってください:\n" + authUrl);
  return authUrl;
}

/**
 * チャンネル分析を実行する関数
 * この関数は実行例として提供されています
 */
function runChannelAnalysis() {
  // 環境変数が正しく設定されているか確認
  try {
    const apiKey = getYouTubeApiKey();
    const credentials = getOAuthCredentials();

    console.log("環境変数の設定が確認できました。分析を開始します...");

    // ここに分析ロジックを実装
    // ...
  } catch (error) {
    console.error("環境変数の設定に問題があります:", error.message);
    console.log(
      "「環境変数設定手順.md」を参照して、必要な環境変数を設定してください。"
    );
  }
}
