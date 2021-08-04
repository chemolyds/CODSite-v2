import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../layouts/layout'

export default function courses() {
	return (
		<Layout>
			<SEO title="Courses"/>
			<img src="https://imgur.com/1NOksZT.png"/>

			<dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
				<div class="max-w-md py-4 px-5 bg-white hover:bg-blue-100 shadow-2xl rounded-md mx-5">
					<Link to="Bronze">
						<dt>
							<p class="mb-2 text-lg leading-5 front-medium text-gray-900">
								Bronze
							</p>
						</dt>
						<dd class="text-base text-gray-500">
							Start here!
						</dd>
					</Link>
				</div>
				<div class="max-w-md py-4 px-5 bg-white hover:bg-blue-100 shadow-2xl rounded-md mx-5">
					<Link to="Silver">
						<dt>
							<p class="mb-2 text-lg leading-5 front-medium text-gray-900">
								Silver
							</p>
						</dt>
						<dd class="text-base text-gray-500">
							Nationals difficulty competitions
						</dd>
					</Link>
				</div>
				<div class="max-w-md py-4 px-5 bg-white hover:bg-blue-100 shadow-2xl rounded-md mx-5">
					<Link to="Gold">
						<dt>
							<p class="mb-2 text-lg leading-5 front-medium text-gray-900">
								Gold
							</p>
						</dt>
						<dd class="text-base text-gray-500">
							Mendelev difficulty competitions
						</dd>
					</Link>
				</div>
			</dl>
		</Layout>
	)
}