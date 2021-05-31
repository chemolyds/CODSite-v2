import React from 'react'
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'

export default function FAQ({ data }) {
	return (
		<Layout>
			<h1>Frequently Asked Questions</h1>
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
	allFile(filter: {sourceInstanceName: {eq: "FAQ"}}) {
		nodes {
			childMdx {
				slug
				excerpt
			}
		}
	}
}
`