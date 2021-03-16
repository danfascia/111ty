const pluginTailwindCSS = require("eleventy-plugin-tailwindcss")
const navigation = require("@11ty/eleventy-navigation")
const seo = require("eleventy-plugin-seo")
const unpkgInliner = require("eleventy-njk-unpkg-inliner")
const site = require("./src/_data/site.js")

module.exports = function(eleventyConfig) {

    // TEMPLATES
    eleventyConfig.addLayoutAlias('default', 'layouts/base.njk')
    
    // PLUGINS
    eleventyConfig.addPlugin(pluginTailwindCSS, {
        src: "src/css/style.css"
    })

    eleventyConfig.addPlugin(seo, {
        title: site.title,
        description: site.description,
        url: site.url,
        author: site.author.name,
        twitter: site.author.twitter,
        image: site.image
      })
    
    // SHORTCODES
    eleventyConfig.addNunjucksAsyncShortcode('inline', unpkgInliner)

    // DEEP DATA MERGE
    eleventyConfig.setDataDeepMerge(true)

    return {
        dir: {
            input: 'src',
            output: 'dist'
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk'

    }

}
