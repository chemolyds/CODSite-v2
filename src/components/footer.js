import React from 'react'
import { Link } from 'gatsby'

const Footer = function() {
	return (
		<div class="antialiased bg-gray-800 text-white pb-0 mb-0">
			<p/>
			<div class="lg:px-15 px-6 flex flex-wrap items-center lg:py-0 py-2 mr-auto">
				<ul class="my-0 ml-auto mr-auto text-gray-400 mt-3 mb-2">
					<li style={{display: 'inline'}}>
						<div class="hover:text-gray-100 m-0 py-2 px-4 relative float-right">
							<Link to="/">Home</Link>
						</div>
					</li>
					<li style={{display: 'inline'}}>
						<div class="hover:text-gray-100 m-0 py-2 px-4 relative float-right">
							<Link to="/competitions">Competitions</Link>
						</div>
					</li>
					<li style={{display: 'inline'}}>
						<div class="hover:text-gray-100 m-0 py-2 px-4 relative float-right">
							<Link to="/guides">Guides</Link>
						</div>
					</li>
					<li style={{display: 'inline'}}>
						<div class="hover:text-gray-100 m-0 py-2 px-4 relative float-right">
							<Link to="/faq">FAQ</Link>
						</div>
					</li>
					<li style={{display: 'inline'}}>
						<div class="hover:text-gray-100 m-0 py-2 px-4 relative float-right">
							<Link to="/about">About</Link>
						</div>
					</li>
				</ul>
			</div>
			
			<div class="">
				<p class="mb-0 py-0 text-center">CODSite was made by our community and staff members on the CODServer. If you would like to contribute, visit our <Link to="https://github.com/Jerdan1980/CODSite-v2">Github</Link></p>
				<p class="my-0 py-0 text-center text-gray-400">For inquiries, click <Link to="/about" class="text-blue-300 hover:text-blue-200">here</Link>. For donations, contact chemolyds@gmail.com</p>
				<h1 class="mt-2 py-0 text-center">
					-
					<span style={{"color": "#e70011"}}> C</span>
					<span style={{"color": "#f9be00"}}>O</span>
					<span style={{"color": "#009c44"}}>D</span>
					<span style={{"color": "#1055bd"}}>S </span>
					-
				</h1>
			</div>
		</div>
	)
}

export default Footer