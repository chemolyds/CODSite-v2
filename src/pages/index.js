import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import SEO from '../components/seo'
import Header from '../components/header'
import Footer from '../components/footer'
import '../layouts/layout.css'

export default function Home() {
	return (
		<>
			<SEO title="Home" keywords={['Chem Competition']} />
			<Header siteTitle="CODSite" />
			<div style={{margin: '0 auto',	paddingTop: 0}}>
				<StaticImage src="../images/welcome.png" placeholder="blurred"/>

				<div class="bg-blue-50 px-20 py-10">
					<h2 class="text-center font-normal">CODS is a global community made for Chemistry Olympiad participants</h2>
					<h3 class="text-center font-light">Haven't joined the community yet? You can join <a class="text-blue-400" target="_blank" href="https://discord.gg/chemistry">here</a>.</h3>
					<h3 class="font-light mt-10">Our Mission is to make Competitive Chemistry more...</h3>
					<dl class="md:grid md:grid-cols-3">

						<div class="max-w-md py-4 px-5 bg-white hover:bg-blue-100 shadow-2xl rounded-md mx-5">
 							 <div>
    							<h2 class="text-gray-800 text-3xl font-medium">Competitive</h2>
								<p class="mt-2 text-gray-700 text-lg">by leveling out the playing field of competitive chemistry, we hope to increase the standards of Chemistry Olympiads</p>
							</div>
						</div>

						<div class="max-w-md py-4 px-5 bg-white hover:bg-blue-100 shadow-2xl rounded-md mx-5">
 							 <div>
    							<h2 class="text-gray-800 text-3xl font-medium">Accessible</h2>
								<p class="mt-2 text-gray-700 text-lg">to a wider audience. We run four annual competitions for anyone around the world to compete in and provide guides for anyone to get started.</p>
							</div>
						</div>

						<div class="max-w-md py-4 px-5 bg-white hover:bg-blue-100 shadow-2xl rounded-md mx-5">
 							 <div>
    							<h2 class="text-gray-800 text-3xl font-medium">Fair</h2>
								<p class="mt-2 text-gray-700 text-lg">for everyone by providing guides for all levels of participants. We also provide high quality custom study resources to asssist your journey.</p>
							</div>
						</div>

					</dl>
				</div>

				<div style={{padding: '1.45rem 1.0875rem 1.45rem'}}>
					<h2>What is CODSite for?</h2>
					<p>
						CODSite is an all-purpose website made for our community (competitive Chemistry enthusiasts).
						Everything on CODSite is free to use for anybody, no sign-ups or memberhsip required.
						We provide custom <b>open educational resources</b> such as lectures, detailed notes, useful websites, problem sets, guides, tools, and all of our past competition papers.
						Anything a chemistry freak could dream of lies within this website.
					</p>

					<div class="text-center">
						<h2>Open Educational Resources at CODSite</h2>
						<dl class="md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
							<div class="relative border border-gray-400">
								<Link to="https://www.youtube.com/channel/UCyO5Wn2qKDRYWC-F5EfN2kA">
								<dt>
									<h2 class="mt-2 mb-2">
										Lectures
									</h2>
								</dt>
								<dd class="text-base">
									We provide lectures for everyone, from introductory lectures to problem solving and advanced topic lectures. You can watch our lectures on our YouTube channel.
								</dd>
								</Link>
							</div>
							<div class="relative border border-gray-400">
								<dt>
									<h2 class="mt-2 mb-2">
										CODSNotes
									</h2>
								</dt>
								<dd class="text-base">
									Made specially for the CODS community, these notes cover the fundamentals required for competitive Chemistry, from Atomic structures to Organic Chemistry.
								</dd>
							</div>
							<div class="relative border border-gray-400">
								<dt>
									<h2 class="mt-2 mb-2">
										Guides
									</h2>
								</dt>
								<dd class="text-base">
									Our staff is dedicated to writing guides for all levels. From introductory guides to those for the IChO level, there is a guide for anyone written by the best in the competitive chemistry scene.
								</dd>
							</div>
							<div class="relative border border-gray-400">
								<dt>
									<h2 class="mt-2 mb-2">
										Past Papers
									</h2>
								</dt>
								<dd class="text-base">
									All of our past competition papers are released to the public and can be accessed immediately. Click here to access our list of past exams.
								</dd>
							</div>
							<div class="relative border border-gray-400">
								<dt>
									<h2 class="mt-2 mb-2">
										Competitions
									</h2>
								</dt>
								<dd class="text-base">
									We provide four annual chemistry competitions for anyone to participate. For more information:
									<ul>
										<li><Link to="competitions/competitors_guide">Competitor's Guide</Link></li>
										<li><Link to="competitions/acot">ACOT</Link></li>
										<li><Link to="competitions/wcc">WCC (CODSchO)</Link></li>
										<li><Link to="competitions/socc">SOCC</Link></li>
										<li><Link to="compeitions/scho">SChO</Link></li>
									</ul>
								</dd>
							</div>
							<div class="relative border border-gray-400">
								<dt>
									<h2 class="mt-2 mb-2">
										Courses (WIP)
									</h2>
								</dt>
								<dd class="text-base">
								Made specifically for chemistry olympiad participants, these courses will go over the fundamentals required for competitive chemistry, providing a variety of practice problems and tips & tricks for competitors at any skill level.
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
			<Footer/>
		</>
	)
}

