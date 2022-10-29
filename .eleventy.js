const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const pluginTOC = require('eleventy-plugin-toc');

module.exports = function(eleventyConfig) {

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
  eleventyConfig.addPassthroughCopy("_src/js");

  // Returns

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about those.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`
    // pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    dir: {
      input: "_src",
      includes: "templates",
      data: "data",
      output: "docs"
    }
  };
};