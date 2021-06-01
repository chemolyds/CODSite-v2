import React from 'react'
import { graphql, Link } from "gatsby"
import Layout from '../../layouts/layout'

export default function Gold({ data }) {
	return (
		<Layout>
			<h1>Gold</h1>
			<Link to='/courses'>Back to Courses</Link>
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
	allFile(filter: {sourceInstanceName: {eq: "Gold"}}) {
		nodes {
			childMdx {
				slug
				excerpt
			}
		}
	}
}
`