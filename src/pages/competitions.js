import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts/layout'

const navigation = [
	{name: "Competitor's guide", link: "/competitions/competitors_guide", description: "About our competitions!"},
	{name: "ACOT", link: "/competitions/acot", description: "Autumn Chemistry Olympiad Tournament"},
	{name: "WCC", link: "/competitions/wcc", description: "Winter Chemistry Competition"},
	{name: "SOCC", link: "/competitions/socc", description: "Spring Open Chemistry Competition"},
	{name: "SChO", link: "/competitions/scho", description: "Summer Chemistry Olympiad"}
]

export default function competitions() {
	return (
		<Layout>
			<img src="https://imgur.com/1NOksZT.png"/>

			<dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
				{navigation.map((item) => (
					<div class="max-w-md py-4 px-5 bg-white hover:bg-blue-100 shadow-2xl rounded-md mx-5">
						<Link to={item.link}>
						<dt>
							<p class="mb-2 text-lg leading-5 front-medium text-gray-900">
								{item.name}
							</p>
						</dt>
						<dd class="text-base text-gray-500">
							{item.description}
						</dd>
						</Link>
					</div>
				))}
			</dl>
		</Layout>
	)
}