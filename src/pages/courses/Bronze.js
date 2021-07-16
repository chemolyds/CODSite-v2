import React from 'react'
import { graphql, Link } from "gatsby"
import Layout from '../../layouts/layout'
import SubpagesTable from '../../components/SubpagesTable'

export default function Bronze({ data }) {
	return (
		<Layout>
			<h1>Bronze</h1>
			<Link to='/courses'>Back to Courses</Link>
			<SubpagesTable nodes={data.allFile.nodes}/>
			
		</Layout>
	)
}

export const query = graphql`
query {
	allFile(filter: {sourceInstanceName: {eq: "Bronze"}, childMdx: {excerpt: {ne: ""}}}) {
		nodes {
			childMdx {
				slug
				excerpt
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