const pluginTailwindCSS = require("eleventy-plugin-tailwindcss")
const navigation = require("@11ty/eleventy-navigation")
const seo = require("eleventy-plugin-seo")
const unpkgInliner = require("eleventy-njk-unpkg-inliner")

module.exports = function(eleventyConfig) {

    // TEMPLATES
    eleventyConfig.addLayoutAlias('default', 'layouts/base.njk')
    
    // PLUGINS
    eleventyConfig.addPlugin(pluginTailwindCSS, {
        src: "src/css/style.css"
    })

    eleventyConfig.addPlugin(seo, {
        title: "11ty-1 starter",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "https://foo.com",
        author: "Jane Doe",
        twitter: "danfascia",
        image: "foo.jpg"
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