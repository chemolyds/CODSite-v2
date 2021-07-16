import React from 'react'
import { Link } from 'gatsby'
import { groupBy, categorySort, orderSort } from '../components/sorters'

const SubpagesTable = function(props) {
	return (
		<>
		{
			groupBy(props.nodes, "relativeDirectory").sort(categorySort).map(group => {
				return (
					<div>
						<h1>{group.key.replaceAll('_', ' ').replace(/[0-9] /g, '')}</h1>
						<table class="min-w-full divide-y divide-gray-200">
							<thead>
								<tr>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
								</tr>
							</thead>
							<tbody>
								{
									group.values.sort(orderSort).map(node => {
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
		</>
	)
}

export default SubpagesTable