const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const pluginTOC = require('eleventy-plugin-toc');

module.exports = function(eleventyConfig) {

  eleventyConfig.setServerOptions({
    showAllHosts: true
  })

  // Markdown

  eleventyConfig.setLibrary(
    'md',
    markdownIt({ html: true }).use(markdownItAnchor)
  );
  //eleventyConfig.addPlugin(pluginTOC)
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2', 'h3'],
    ul: true
  })

  // Pass Through Copy

  eleventyConfig.addPassthroughCopy("_src/css/min");
  eleventyConfig.addPassthroughCopy("_src/css/partials/colors-hsl.css");
  eleventyConfig.addPassthroughCopy("_src/css/partials/colors-oklch.css");
  // eleventyConfig.addPassthroughCopy("_src/js");
  eleventyConfig.addPassthroughCopy("_src/img");

  // Returns

  return {
    dir: {
        input: "_src",
        includes: "templates",
        data: "data",
        output: "docs"
      },
      pathPrefix: "/baselayer/"
  };

};