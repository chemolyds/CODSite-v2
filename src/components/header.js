import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, {useState} from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { StaticImage } from 'gatsby-plugin-image'
//import Logo from '../images/cods_logo_white.png'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Header = function({ siteTitle }) {
  {/*handles mouseover for the menus*/}
  const [isShownFAQ, setIsShownFAQ] = useState(false);
  const [isShownCourses, setIsShownCourses] = useState(false);
  const [isShownGuides, setIsShownGuides] = useState(false);
  const [isShownAbout, setIsShownAbout] = useState(false);

  return (
  <div class="antialiased bg-gray-700 font-sans text-white mb-20 sticky top-0">
    <div class="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2 mr-auto">
      <h1 id="test-id" class="m-0 hover:text-blue-200 font-light tracking-wider">
        <Link to="/">
          <StaticImage src='../images/cods_logo_white.png' height={50} alt={siteTitle} placeholder="tracedSVG"/>
        </Link>
      </h1>

			<ul class="my-0 ml-auto">
				{/* It goes right to left */}
       
				<li style={{display: 'inline'}}>
          <div class="hover:text-gray-300 m-0 py-2 px-4 relative float-right" onMouseLeave={() => setIsShownAbout(false)}>
            <Link to="/about" onMouseEnter={() => setIsShownAbout(true)}>About</Link>
          </div>    
        </li>

				<li style={{display: 'inline'}}>
          <div class="hover:text-gray-300 m-0 py-2 px-4 relative float-right" onMouseLeave={() => setIsShownFAQ(false)}>
           <Link to="/FAQ" onMouseEnter={() => setIsShownFAQ(true)}>FAQ</Link>
          </div>
        </li>

				<li style={{display: 'inline'}}>
          <div class="hover:text-gray-300 m-0 py-2 px-4 relative float-right" onMouseLeave={() => setIsShownGuides(false)}>
            <Link to="/guides" onMouseEnter={() => setIsShownGuides(true)}>Guides</Link>
          </div>
        </li>

			{/* Dropdown for courses */}
			{/*
			<Menu as="div" className="relative inline-block text-left ">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 m-0 text-white focus:outline-none hover:text-gray-300">
              Courses
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-28 rounded shadow-xl bg-gray-700 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="\courses\Bronze"
                      className={classNames(
                        active ? 'bg-gray-600 text-gray-100' : 'text-white',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Bronze
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="\courses\Silver"
                      className={classNames(
                        active ? 'bg-gray-600 text-gray-100' : 'text-white',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Silver
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="\courses\Gold"
                      className={classNames(
                        active ? 'bg-gray-600 text-gray-100' : 'text-white',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Gold
                    </a>
                  )}
                </Menu.Item>
              </div>
              
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
		*/}

    {/* Dropdown for competitions */}
    <Menu as="div" className="relative inline-block text-left ">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 m-0 text-white focus:outline-none hover:text-gray-300">
              Competitions
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-28 rounded shadow-xl bg-gray-700 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/competitions/acot"
                      className={classNames(
                        active ? 'bg-gray-600 text-gray-100' : 'text-white',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      ACOT
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/competitions/scho"
                      className={classNames(
                        active ? 'bg-gray-600 text-gray-100' : 'text-white',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      SChO
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/competitions/stc"
                      className={classNames(
                        active ? 'bg-gray-600 text-gray-100' : 'text-white',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      STC
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/competitions/wcc"
                      className={classNames(
                        active ? 'bg-gray-600 text-gray-100' : 'text-white',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      WCC
                    </a>
                  )}
                </Menu.Item>
              </div>
              
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
			</ul>
    </div>
  </div>
  
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
