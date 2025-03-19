const filters = require("./src/_includes/filters.js");

module.exports = function(eleventyConfig) {
  // パススルーファイルコピー設定
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // フィルター登録
  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}; 