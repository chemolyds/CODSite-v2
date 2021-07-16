import React from 'react'
import { graphql, Link } from "gatsby"
import Layout from '../layouts/layout'
import { StaticImage } from 'gatsby-plugin-image'
import SubpagesTable from '../components/SubpagesTable'

export default function guides({ data }) {
	return (
		<Layout>
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