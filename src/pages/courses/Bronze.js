import React from 'react'
import { graphql, Link } from "gatsby"
import Layout from '../../layouts/layout'

export default function Bronze({ data }) {
	return (
		<Layout>
			<h1>Bronze</h1>
			<Link to='/courses'>Back to Courses</Link>
			<ul>
			{
				data.allFile.nodes.filter(node => node.childMdx).filter(node => node.childMdx.excerpt).map(node => {
					var slug = node.childMdx.slug
					var title = node.childMdx.frontmatter.title
					return (
						<li><Link to={slug}>
							{title ? title : slug}
						</Link></li>
					)
				})
			}
			</ul>
			
		</Layout>
	)
}

export const query = graphql`
query {
	allFile(filter: {sourceInstanceName: {eq: "Bronze"}}) {
		nodes {
			childMdx {
				slug
				excerpt
				frontmatter {
					title
					description
				}
			}
		}
	}
}
`