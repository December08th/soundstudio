const markdownIt = require("markdown-it");
const markdownItRenderer = new markdownIt();

module.exports = function(eleventyConfig) {

    eleventyConfig.addFilter('markdownify', (str) => {
        return markdownItRenderer.renderInline(str);
    });

    eleventyConfig.addPassthroughCopy('./assets/css/*.css');
    eleventyConfig.addPassthroughCopy('./assets/js/**/*.js');
    eleventyConfig.addPassthroughCopy('./assets/images/**/*');
    eleventyConfig.addPassthroughCopy('./assets/fonts/**/*');

};