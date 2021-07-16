import React from 'react'
import { graphql, Link } from "gatsby"
import Layout from '../layouts/layout'
import { StaticImage } from 'gatsby-plugin-image'

// https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects?page=1&tab=votes#tab-top
const groupBy = function (xs, key) {
	return xs.reduce(function (rv, x) {
		let v = key instanceof Function ? key(x) : x[key];
		let el = rv.find((r) => r && r.key === v);
		if (el) {
			el.values.push(x);
		} else {
			rv.push({ key: v, values: [x] });
		}
		return rv;
	}, []);
}

// https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
const alphaSort = function (a, b) {
	let ca = a.key
	let cb = b.key

	if (ca < cb) return -1
	if (ca > cb) return 1
	return 0
}

export default function guides({ data }) {
	return (
		<Layout>
			<StaticImage src="../images/guides.png" placeholder="blurred"/>
			{
				groupBy(data.allFile.nodes, "relativeDirectory").sort(alphaSort).map(group => {
					return (
						<div>
							<h1>{group.key.replace('_', ' ')}</h1>
							<table class="min-w-full divide-y divide-gray-200">
								<thead>
									<tr>
										<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
										<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
									</tr>
								</thead>
								<tbody>
									{
										group.values.map(node => {
											var slug = node.childMdx.slug
											var title = node.childMdx.frontmatter.title
											var description = node.childMdx.frontmatter.description
											return (
												<tr key={slug}>
													<td class="px-6 py-4 whitespace-nowrap"><Link to={slug}>{title}</Link></td>
													<td class="px-6 py-4 whitespace-nowrap"><Link to={slug}>{description}</Link></td>
												</tr>
											)
										})
									}
								</tbody>
							</table>
						</div>
					)
				})
			}
			
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
				}
			}
			relativeDirectory
		}
	}
}
`