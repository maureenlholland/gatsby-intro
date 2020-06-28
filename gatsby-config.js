module.exports = {
    siteMetadata: {
        title: 'Gatsby demo',
        description: 'Testing Gatsby workflow',
    },
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/layout.js')
                }
            }
        }
    ],
}
