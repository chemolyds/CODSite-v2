require('dotenv').config();
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
		{
			resolve: 'gatsby-source-google-spreadsheets',
			options: {
				spreadsheetId: '1ps4XIdwJGIEhmiSOQ-4US781NZlBlMZIr8WEAfR9KK4',
				credentials: require('./gapi-token.json')
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
		/* Google Analytics */
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				trackingIds: [
					process.env.GOOGLE_ANALYTICS
					//tokens.google_analytics,
					// Google Analytics / GA
				],
				gtagConfig: {
					// Google Optimize for A/B testing
					// optimize_id: "OPT_CONTAINER_ID",
					anonymize_ip: true,
					cookie_expires: 0,
				},
				// This object is used for configuration specific to this plugin
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: false,
					// Respects "Do Not Track"
					respectDNT: true,
					// Avoids sending pageview hits from custom paths
					// exclude: ["/whatever"],
					// Defaults to https://www.googletagmanager.com
					// origin: "YOUR_SELF_HOSTED_ORIGIN",
				}
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
