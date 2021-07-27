import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts/layout'
import stuff from './resources.json'
import autoprefixer from 'autoprefixer'

const numcols = function (num) {
	let three = num % 3
	let four = num % 4

	if (three != 1) {
		return ("md:grid-cols-3")
	} else if (four != 1) {
		return ("md:grid-cols-4")
	} else {
		return ("md:grid-cols-3")
	}
}

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
						<div class={`md:grid gap-5 place-items-center ${numcols(c.resources.length)}`}>
							{c.resources.map(r => {
									return (
										<div class="text-center sm:mb-10">
											{r.image ? <img src={r.image} class="h-64 mb-1"/> : <></>}
											{r.title ? <p class="font-bold mt-0 mb-1">
												{r.link ? <Link to={r.link}>{r.title}</Link> : r.title}
											</p> : <></>}
											<p class="text-sm mb-1">
												{r.link ? <Link to={r.link}>{r.description}</Link> : r.description}
											</p>
											{r.download? <Link class="text-blue-400 font-bold mt-0" to={r.download}>Download</Link> : <></>}
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