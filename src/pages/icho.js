import React, { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
// https://www.npmjs.com/package/react-pdf
//import { Document, Page } from 'react-pdf/dist/umd/entry.webpack'

import SEO from '../components/seo'
import Layout from '../layouts/layout'
import stuff from './IChO.json'

export default function IChO() {
	return (
		<Layout>
			<SEO title="IChO"/>
			<h1 class="text-center">IChO</h1>

			{stuff.map(y => { return (
				<Disclosure as="div" className="mt-2">
					{({ open }) => (
						<>
							<Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
								<span>{y.year}</span>
								<ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-purple-500`}/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
								{y.problems.map(p => { return (
									<Disclosure as="div" className="mt-2">
										{({ open }) => (
											<>
												<Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
													<span>{p.name}</span>
													<ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-purple-500`}/>
												</Disclosure.Button>
												<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
													{p.description ? <p>{p.description}</p> : <></>}
													{p.difficulty ? <p>Difficulty: {p.difficulty}</p> : <></>}
													<a href={p.pdf} class="text-blue-400">Problem</a>
												</Disclosure.Panel>
											</>
										)}
									</Disclosure>
								)})}
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			)})}

		</Layout>
	)
}