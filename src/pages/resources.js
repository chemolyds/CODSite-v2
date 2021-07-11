import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts/layout'
import stuff from './resources.json'
import autoprefixer from 'autoprefixer'

const GeneralResources = [
	{
		"title": "CODS Courses (WIP)",
		"description": "We provide over 60 courses for all participants to use, from topics that are regularly covered in your classroom to Olympiad-specific topics. These courses are designed specifically for the chemistry Olympiad competitors and those who plan on competing in CODS Competitions.\nEach module provides resources, special guidance, and problems for participants to use for thier learning experience. We updte the courses every week and anyone can contribute to the project. Check it out!",
	},
	{
		"title": "Chemguide",
		"description": "Chemguide is a very good learning resource. Made by Jim Clark, its initial purpose was to provide U.K. students a place to learn about chemistry. However, this resource is extremely helpful for chemistry Olympiad participants as well, and the inorganic chemistry section in particular has been proven to be invaluable.",
	},
	{
		"title": "Chemistry LibreTexts",
		"description": "Chemistry LibreTexts can also be great help as well. Content that is present in Chemistry Olympiads that aren't taught in high school can often be learned from this website. You should check it out!",
	}
]

export default function resources() {
	return (
		<Layout>
			<h1>Resources</h1>

			<h2 class="text-center">General Resources</h2>
			{
				GeneralResources.map(r => {
					return (
						<div>
							<h3>{r.title}</h3>
							<p>{r.description}</p>
						</div>
					)
				})
			}

			{stuff.map(c => {
				return (
					<div>
						<h2 class="text-center">{c.category}</h2>
						<div class="grid grid-flow-col gap-5">
							{c.resources.map(r => {
									return (
										<div class="text-center">
											<img src={r.image} class="h-64"/>
											<h3>{r.title}</h3>
											<p>{r.description}</p>
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