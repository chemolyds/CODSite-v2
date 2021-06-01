import React from 'react'
import { graphql, Link } from "gatsby"
import Layout from '../layouts/layout'

export default function FAQ({ data }) {
	return (
		<Layout>
			<h1 class="lg:text-center">Frequently Asked Questions</h1>
			<dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
				{
					data.allFile.nodes.filter(node => node.childMdx).map(node => { return (
						<div class="relative">
							<Link to={node.childMdx.slug}>
							<dt>
								<p class="mb-2 text-lg leading-5 front-medium text-gray-900">
									{node.childMdx.frontmatter.title}
								</p>
							</dt>
							<dd class="text-base text-gray-500">
								{node.childMdx.excerpt}
							</dd>
							</Link>
						</div>
					)})
				}
			</dl>
			
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
				frontmatter {
					title
				}
			}
		}
	}
}
`