import React from 'react'
import { graphql } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

import SEO from '../components/seo'
import Layout from '../layouts/layout'
import SubpagesTable from '../components/SubpagesTable'
import Autograder from '../components/autograder'

export default function guides({ data }) {
	return (
		<Layout>
			<SEO title="Guides"/>

			{/*<Autograder/>*/}

			<StaticImage src="../images/guides.png" placeholder="blurred"/>
			<SubpagesTable nodes={data.allFile.nodes}/>
		</Layout>
	)
}

export const query = graphql`
query {
	allFile(filter: {sourceInstanceName: {eq: "guides"}}) {
		nodes {
			childMdx {
				slug
				frontmatter {
					title
					description
					order
				}
			}
			relativeDirectory
		}
	}
}
`