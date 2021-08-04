import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/solid'
import { StaticImage } from 'gatsby-plugin-image'

const navigation = [
	{ 
		name: 'Competitions', 
		subpages: [
			{name: "Competitor's guide", link: "/competitions/competitors_guide"},
			{name: "ACOT", link: "/competitions/acot"},
			{name: "WCC", link: "/competitions/wcc"},
			{name: "SOCC", link: "/competitions/socc"},
			{name: "SChO", link: "/competitions/scho"}
		]
	},
	{ name: 'Guides', link: "/guides"},
	{ name: 'Resources', link: "/resources"},
	{ name: 'FAQ', link: "/FAQ"},
	{ name: 'About', link: "/About"}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavBar = function({ siteTitle }) {
	return (
		<Disclosure as="nav" class="antialiased bg-gray-700 font-sans text-white mb-20 sticky py-1 top-0 z-50">
      {({ open }) => (
        <>
          <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
							{/* Mobile menu button*/}
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700">
                  <span class="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon class="block w-auto" height={50} aria-hidden="true" />
                  ) : (
                    <MenuIcon class="block w-auto" height={50} aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                {/* Logo */}
								<div class="flex-shrink-0 flex items-center">
									<Link to="/">
										<StaticImage class="block lg:hidden w-auto" src='../images/cods_logo_white.png' height={50} alt={siteTitle} placeholder="tracedSVG"/>
									</Link>
									<Link to="/">
										<StaticImage class="hidden lg:block w-auto" src='../images/cods_logo_white.png' height={50} alt={siteTitle} placeholder="tracedSVG"/>
									</Link>
                </div>

								{/* PC Navbar */}
                <div class="hidden sm:block sm:ml-6 absolute right-0">
                  <div class="flex space-x-4 my-0 ml-auto">
                    {navigation.map((item) => (
											<>
												{item.link ? 
													<Link class='hover:text-gray-300 m-0 py-2 px-4 font-thin' key={item.name} to={item.link}>
														{item.name}
													</Link>
												:
													<Menu as="div" className="relative inline-block text-left ">
														{({ open }) => (
															<>
																<div>
																	<Menu.Button class="inline-flex justify-center w-full rounded-md px-4 py-2 m-0 text-white focus:outline-none hover:text-gray-300">
																		{item.name}
																		<ChevronDownIcon class="h-5 w-5 pt-1" aria-hidden="true"/>
																	</Menu.Button>
																</div>

																<Transition
																	show={open}
																	as={Fragment}
																	enter="transition ease-out duration-100"
																	enterFrom="transform opacity-0 scale-95"
																	enterTo="transform opacity-100 scale-100"
																	leave="transition ease-in duration-75"
																	leaveFrom="transform opacity-100 scale-100"
																	leaveTo="transform opacity-0 scale-95"
																>
																	<Menu.Items static class="origin-top-right absolute right-0 mt-2 w-40 rounded shadow-xl bg-gray-700 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
																		<div class="py-1">
																			{item.subpages.map((item) => (
																				<Menu.Item>
																					{({ active }) => (
																						<Link class={classNames(active ? 'bg-gray-600 text-gray-100' : 'text-white', 'block px-4 py-2 text-sm')} to={item.link}>
																							{item.name}
																						</Link>
																					)}
																				</Menu.Item>
																			))}
																		</div>
																	</Menu.Items>
																</Transition>
															</>
														)}
													</Menu>
												}
											</>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

					{/* Mobile Dropdown Menu */}
          <Disclosure.Panel class="sm:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
								<>
									{item.link ?
										<Link class='hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium' key={item.name} to={item.link}>
											{item.name}
										</Link>
									:
										<Menu as="div" className="relative inline-block text-left ">
											{({ open }) => (
												<>
													<div>
														<Menu.Button class="inline-flex justify-center w-full rounded-md px-4 py-2 m-0 text-white focus:outline-none hover:text-gray-300">
															{item.name}
															<ChevronDownIcon class="h-5 w-5 pt-1" aria-hidden="true"/>
														</Menu.Button>
													</div>

													<Transition
														show={open}
														as={Fragment}
														enter="transition ease-out duration-100"
														enterFrom="transform opacity-0 scale-95"
														enterTo="transform opacity-100 scale-100"
														leave="transition ease-in duration-75"
														leaveFrom="transform opacity-100 scale-100"
														leaveTo="transform opacity-0 scale-95"
													>
														<Menu.Items static class="origin-top-right absolute right-0 mt-2 w-40 rounded shadow-xl bg-gray-700 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
															<div class="py-1">
																{item.subpages.map((item) => (
																	<Menu.Item>
																		{({ active }) => (
																			<Link class={classNames(active ? 'bg-gray-600 text-gray-100' : 'text-white', 'block px-4 py-2 text-sm')} to={item.link}>
																				{item.name}
																			</Link>
																		)}
																	</Menu.Item>
																))}
															</div>
														</Menu.Items>
													</Transition>
												</>
											)}
										</Menu>
									}
								</>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
	)
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: '',
}

export default NavBar