import React from 'react'
import { graphql, Link } from "gatsby"
import Layout from '../layouts/layout'
import { StaticImage } from 'gatsby-plugin-image'

export default function guides({ data }) {
	return (
		<Layout>
			<StaticImage src="../images/guides.png" placeholder="blurred"/>
			<ul>
			{
				data.allFile.nodes.filter(node => node.childMdx).map(node => {
					return (
						<li><Link to={node.childMdx.slug}>{node.childMdx.slug}</Link></li>
					)
				})
			}
			</ul>
			
		</Layout>
	)
}

export const query = graphql`
query {
	allFile(filter: {sourceInstanceName: {eq: "guides"}}) {
		nodes {
			childMdx {
				slug
				excerpt
			}
		}
	}
}
`