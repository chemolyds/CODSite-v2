import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts/layout'
import stuff from './resources.json'
import autoprefixer from 'autoprefixer'

export default function resources() {
	return (
		<Layout>
			<h1>Resources</h1>

			{stuff.map(c => {
				return (
					<div>
						<div class="bg-gray-200 pt-5 pb-1 mt-10 mb-5">
							<h2 class="text-center">{c.category}</h2>
							{c.description ? <p class="text-center">{c.description}</p> : <></>}
						</div>
						<div class="md:grid md:grid-flow-col gap-5">
							{c.resources.map(r => {
									return (
										<div class="text-center sm:mb-10">
											{r.image ? <img src={r.image} class="h-64 mb-1"/> : <></>}
											{r.title ? <p class="font-bold mt-0 mb-1">{r.title}</p> : <></>}
											<p class="text-sm">{r.description}</p>
										</div>
									)
							})}
						</div>
					</div>
				)
			})}
		</Layout>
	)
}