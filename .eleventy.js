const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./assets/css/*.css');
    eleventyConfig.addPassthroughCopy('./assets/js/**/*.js');
    eleventyConfig.addPassthroughCopy('./assets/images/**/*');
    eleventyConfig.addPassthroughCopy('./assets/fonts/**/*');

    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

    return {
        dir: {
            "data": "_data",
            includes: "_includes",
            layouts: "_layouts"
        }
    };

};