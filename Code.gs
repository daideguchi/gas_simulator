/**
 * 今日の日付を取得して表示する関数
 */
function getTodaysDate() {
  // 現在の日付を取得
  var today = new Date();

  // 日付をフォーマット（例：2023年4月1日）
  var formattedDate = Utilities.formatDate(
    today,
    "Asia/Tokyo",
    "yyyy年MM月dd日"
  );

  // ログに表示
  Logger.log("今日の日付: " + formattedDate);

  return formattedDate;
}

/**
 * スプレッドシートのアクティブなセルに今日の日付を書き込む関数
 */
function writeDateToActiveCell() {
  // 今日の日付を取得
  var today = getTodaysDate();

  // アクティブなスプレッドシートを取得
  var sheet = SpreadsheetApp.getActiveSheet();

  // アクティブなセルに日付を書き込む
  var activeCell = sheet.getActiveCell();
  activeCell.setValue(today);
}

/**
 * メニューから実行するための関数
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("日付ツール")
    .addItem("今日の日付を挿入", "writeDateToActiveCell")
    .addToUi();
}
