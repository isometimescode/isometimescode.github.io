module.exports = {
  siteMetadata: {
    fullname: 'Toni Wells',
    description: 'remote freelance full stack web developer, devops engineer, and consultant',
    sitename: 'isometimescode.com',
    siteurl: 'https://www.isometimescode.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'isometimescode.com',
        short_name: 'isometimescode.com',
        start_url: '/',
        background_color: '#333333',
        theme_color: '#333333',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-73238590-1',
        head: true,
        anonymize: true,
      },
    },
  ],
}
