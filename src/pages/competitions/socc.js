import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../layouts/layout'
import { StaticImage } from 'gatsby-plugin-image'

export default function acot({ data }) {
	return (
		<Layout>
			<StaticImage src="../../images/banners/socc.png" placeholder="blurred"/>
			<dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
				{
					data.allFile.nodes.filter(node => node.childMdx).map(node => { return (
						<div class="max-w-md py-4 px-5 bg-white hover:bg-blue-100 shadow-2xl rounded-md mx-5">
							<Link to={node.childMdx.slug}>
							<dt>
								<p class="mb-2 text-lg leading-5 front-medium text-gray-900">
									{node.childMdx.frontmatter.title}
								</p>
							</dt>
							<dd class="text-base text-gray-500">
								{node.childMdx.frontmatter.description}
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
	allFile(filter: {sourceInstanceName: {eq: "SOCC"}}) {
		nodes {
			childMdx {
				slug
				frontmatter {
					title
          description
				}
			}
		}
	}
}
`