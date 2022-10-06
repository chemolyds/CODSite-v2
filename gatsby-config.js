require('dotenv').config();
//console.log(process.env.GAPI_PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'))

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
		/*{
			resolve: 'gatsby-source-google-spreadsheets',
			options: {
				spreadsheetId: '1ps4XIdwJGIEhmiSOQ-4US781NZlBlMZIr8WEAfR9KK4',
				credentials: {
					type: 'service_account',
					project_id: process.env.GAPI_PROJECT_ID,
					private_key_id: process.env.GAPI_PRIVATE_KEY_ID,
					private_key: process.env.GAPI_PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
					client_email: process.env.GAPI_CLIENT_EMAIL,
					client_id: process.env.GAPI_client_id,
					auth_uri: 'https://accounts.google.com/o/oauth2/auth',
					token_uri: 'https://oauth2.googleapis.com/token',
					auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
					client_x509_cert_url: process.env.GAPI_CLIENT_X509_CERT_URL,
				},
			},
		},*/
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
  ],
}
