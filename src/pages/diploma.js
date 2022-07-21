import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../layouts/layout'

export default function diploma({ data }) {
	return (
		<Layout>
			<h1>WIP</h1>
		</Layout>
	)
}

export const query = graphql`
query {
	allMongodbCloudDocuments {
		edges {
			node {
				id
				url
				name
			}
		}
	}
}
`