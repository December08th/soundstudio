module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./assets/css/*.css');
    eleventyConfig.addPassthroughCopy('./assets/js/**/*.js');
    eleventyConfig.addPassthroughCopy('./assets/images/**/*');
    eleventyConfig.addPassthroughCopy('./assets/fonts/**/*');

};