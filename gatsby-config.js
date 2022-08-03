const tokens = require('./tokens.json');

module.exports = {
  siteMetadata: {
    title: 'CODSite',
		description: `your source of all things chemistry`,
		author: `Jerdan1908 and friends`,
  },
  plugins: [
		
		/* no idea what this does */
    'gatsby-plugin-react-helmet',
		/* Styling */
		'gatsby-plugin-postcss',
		/* Load images first */
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
		/* name folders for quick querying */
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/competitions/acot`,
				name: `ACOT`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/competitions/scho`,
				name: `SChO`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/competitions/socc`,
				name: `SOCC`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/competitions/wcc`,
				name: `WCC`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/courses/Bronze`,
				name: `Bronze`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/courses/Silver`,
				name: `Silver`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/courses/Gold`,
				name: `Gold`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/guides`,
				name: `guides`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/FAQ`,
				name: `FAQ`,
			},
		},
			/* mongoDB */
			{
				resolve: `gatsby-source-mongodb`,
				options: {
					connectionString: tokens.mongoDB,
					dbName: 'CODS-DB',
					collection: 'diplomas',
					extraParams: {
						ssl: true,
						authSource: 'admin',
						retryWrites: true,
					},
				},
			},
		/* MDX setup */
		{
			resolve: "gatsby-plugin-page-creator",
			options: {
				path: `${__dirname}/content`,
			}
		},
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
				JSFrontmatterEngine: true,
				remarkPlugins: [
					require("remark-math"),
					require("remark-html-katex")
				],
				rehypePlugins: [
					
				],
        defaultLayouts: {
					FAQ: `${__dirname}/src/layouts/FAQ.js`,
					default: `${__dirname}/src/layouts/layout.js`
				},
      },
    },
		/* something something idk */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Chemistry Olympiads Discord Server Website',
        short_name: 'CODSite',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/cods_logo_gradient.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
