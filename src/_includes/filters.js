/**
 * 日付フォーマット関連のフィルター
 */

const { DateTime } = require("luxon");

module.exports = {
  // 読みやすい日付フォーマットを生成
  dateFilter: function(date) {
    return DateTime.fromJSDate(date).toFormat('yyyy年MM月dd日');
  },
  
  // HTML時間要素用の日付文字列を生成
  htmlDateString: function(date) {
    return DateTime.fromJSDate(date).toFormat('yyyy-LL-dd');
  },

  // 配列を指定した数に制限するフィルター
  limit: function(array, limit) {
    if (Array.isArray(array) && limit) {
      return array.slice(0, limit);
    }
    return array;
  }
}; 