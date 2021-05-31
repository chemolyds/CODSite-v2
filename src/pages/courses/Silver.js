import React from 'react'
import { graphql, Link } from "gatsby"
import Layout from '../../components/layout'

export default function Silver({ data }) {
	return (
		<Layout>
			<h1>Silver</h1>
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
	allFile(filter: {sourceInstanceName: {eq: "Silver"}}) {
		nodes {
			childMdx {
				slug
				excerpt
			}
		}
	}
}
`