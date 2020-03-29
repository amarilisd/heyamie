const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
};

module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats("css,njk,md");
};