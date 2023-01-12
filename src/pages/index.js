import React from 'react'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import SEO from '../components/seo'
import Base from '../layouts/base'
import '../layouts/layout.css'

export default function Home({ data }) {
	const mission = [
		{
			header: "Competitive",
			description: "by leveling out the playing field of competitive chemistry, we hope to increase the standards of Chemistry Olympiads.",
		},
		{
			header: "Accessible",
			description: "to a wider audience. We run four annual competitions for anyone around the world to compete in and provide guides for anyone to get started.",
		},
		{
			header: "Fair",
			description: "for everyone by providing guides for all levels of participants. We also provide high quality custom study resources to asssist your journey.",
		}
	];

	return (
		<Base>
			<SEO title="Home" keywords={['Chem Competition']} />

			<div style={{margin: '0 auto',	paddingTop: 0}}>
				<center><StaticImage src="../images/banners/welcome.png" placeholder="blurred"/></center>

				{/*<div style={{padding: '1.45rem 1.0875rem 1.45rem'}} class="mt-16 text-center bg-purple-100">
					<h1 class="text-center mb-0">Latest News</h1>
					<dl class="md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 text-center">

						<div class="transition duration-300 ease-in-out max-w-md py-4 mx-5 my-4 bg-white border-2 border-emerald-400 hover:border-emerald-900 rounded-l-lg">
							<dt>
								<h2 class="mt-2 mb-0 font-normal tracking-wide">
									Previous Competition
								</h2>
								<h3 class="mt-0 mb-5 font-semibold text-2xl">
									ACOT 2022
								</h3>
							</dt>
							<dd class="text-base">
								<ul class="ml-0 pl-0">
									<li class="text-blue-400 md:m-0" style={{"listStyle": "none"}}><Link to="competitions/competitors_guide">Competitor's Guide</Link></li>
									<li class="text-blue-400 md:m-0" style={{"listStyle": "none"}}><Link to="competitions/acot">Rulebook</Link></li>
									<li class="text-blue-400 md:m-0" style={{"listStyle": "none"}}><Link to="competitions/wcc">Awards Ceremony</Link></li>
									<li class="text-blue-400 md:m-0" style={{"listStyle": "none"}}><Link to="competitions/socc">Results</Link></li>
								</ul>
							</dd>
						</div>

						<div class="transition duration-300 ease-in-out max-w-md py-4 px-5 mx-5 my-4 bg-white border-2 border-emerald-400 hover:border-emerald-900 rounded-none">
							<dt>
								<h2 class="mt-2 mb-0 font-normal tracking-wide">
									Current Competition
								</h2>
								<h3 class="mt-0 mb-5 font-semibold text-2xl">
									WCC 2022
								</h3>
							</dt>
							<dd class="text-base">
								<ul class="ml-0 pl-0">
									<li class="text-blue-400 md:m-0" style={{"listStyle": "none"}}><Link to="competitions/competitors_guide">Competitor's Guide</Link></li>
									<li class="text-blue-400 md:m-0" style={{"listStyle": "none"}}><Link to="competitions/acot">Rulebook</Link></li>
									<li class="text-blue-400 md:m-0" style={{"listStyle": "none"}}><Link to="competitions/wcc">Past Competitions</Link></li>
									<li class="text-blue-400 md:m-0" style={{"listStyle": "none"}}><Link to="competitions/socc">Signups</Link></li>
								</ul>
							</dd>
						</div>

						<div class="transition duration-300 ease-in-out max-w-md py-4 px-5 mx-5 my-4 bg-white border-2 border-emerald-400 hover:border-emerald-900 rounded-r-lg">
							<dt>
							<h2 class="mt-2 mb-0 font-normal tracking-wide">
									Latest Videos
								</h2>
							</dt>
							<dd class="text-base">
								<ul class="ml-0 pl-0">
								<li class="text-blue-400 mt-2" style={{"listStyle": "none"}}><Link to="https://www.youtube.com/channel/UCyO5Wn2qKDRYWC-F5EfN2kA">Our Youtube Channel</Link></li>
								{
									data.allYoutubeVideo.nodes.map(node => { return (
										<li style={{"listStyle": "none"}}>
											<Link class="text-blue-400 mt-1" to={`https://youtube.com/watch?v=${node.videoId}`}>{node.title}</Link> 
											<span class="hidden"> ({node.publishedAt})</span>
										</li>
									)})
								}
								</ul>
							</dd>
						</div>

					</dl>
				</div> */}

				<div class="px-5 md:px-20 pt-10 pb-5">
					<h2 class="text-center font-normal">CODS is a global community made for Chemistry Olympiad participants</h2>
					<h3 class="text-center font-light">Haven't joined the community yet? You can join <Link class="text-blue-400" href="https://discord.gg/chemistryolympiad">here</Link>.</h3>
					
				</div>

				<div class="bg-blue-100 px-5 md:px-20 py-10">
					<h3 class="font-light">Our Mission is to make Competitive Chemistry more...</h3>
					<dl class="md:grid md:grid-cols-3">
						{
							mission.map(cell => { return (
								<div class="transition duration-300 ease-in-out max-w-md py-4 px-5 bg-white hover:shadow-2xl rounded-md mx-5 my-4 transform hover:-translate-y-1 hover:scale-110">
									<div>
											<h2 class="text-gray-800 text-3xl font-medium mb-3">{cell.header}</h2>
										<p class="mt-2 text-gray-700 text-lg">{cell.description}</p>
									</div>
								</div>
							)})
						}
					</dl>
				</div>

				<div style={{padding: '1.45rem 1.0875rem 1.45rem'}}>
					<h2 class="font-medium mt-10 text-center">What is CODSite for?</h2>
					<p class="md:px-20">
						CODSite is an all-purpose website made for our community (competitive Chemistry enthusiasts).
						Everything on CODSite is free to use for anybody, no sign-ups or memberhsip required.
						We provide custom <b>open educational resources</b> such as lectures, detailed notes, useful websites, problem sets, guides, tools, and all of our past competition papers.
						Anything a chemistry freak could dream of lies within this website.
					</p>

					<div class="text-center md:px-20">
						<h2 class="font-medium tracking-wide mt-20 mb-16">Open Educational Resources at CODSite</h2>
						<dl class="md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
							<div class="transition duration-300 ease-in-out max-w-md py-4 px-5 bg-white hover:shadow-2xl transform hover:-translate-y-1 hover:scale-110 rounded-xl mx-5 my-4">
								<Link to="https://www.youtube.com/channel/UCyO5Wn2qKDRYWC-F5EfN2kA">
								<dt>
									<h2 class="mt-2 mb-5 font-normal tracking-wide text-blue-400">
										Lectures
									</h2>
								</dt>
								<dd class="text-base">
									We provide lectures for everyone, from introductory lectures to problem solving and advanced topic lectures. You can watch our lectures on our YouTube channel.
								</dd>
								</Link>
							</div>
							<div class="transition duration-300 ease-in-out max-w-md py-4 px-5 bg-white hover:shadow-2xl transform hover:-translate-y-1 hover:scale-110 rounded-xl mx-5 my-4">
								<Link to="https://drive.google.com/drive/u/4/folders/195kcNDwljvw1w5ZKVWzpE7LCdbvwQzVL">
								<dt>
									<h2 class="mt-2 mb-5 font-normal tracking-wide text-blue-400">
										CODSNotes
									</h2>
								</dt>
								<dd class="text-base">
									Made specially for the CODS community, these notes cover the fundamentals required for competitive Chemistry, from Atomic structures to Organic Chemistry.
								</dd>
								</Link>
							</div>
							<div class="transition duration-300 ease-in-out max-w-md py-4 px-5 bg-white hover:shadow-2xl transform hover:-translate-y-1 hover:scale-110 rounded-xl mx-5 my-4">
								<Link to="/guides">
								<dt>
									<h2 class="mt-2 mb-5 font-normal tracking-wide text-blue-400">
										Guides
									</h2>
								</dt>
								<dd class="text-base">
									Our staff is dedicated to writing guides for all levels. From introductory guides to those for the IChO level, there is a guide for anyone written by the best in the competitive chemistry scene.
								</dd>
								</Link>
							</div>
							<div class="transition duration-300 ease-in-out max-w-md py-4 px-5 bg-white hover:shadow-2xl transform hover:-translate-y-1 hover:scale-110 rounded-xl mx-5 my-4">
								<Link to="/competitions">
								<dt>
									<h2 class="mt-2 mb-5 font-normal tracking-wide text-blue-400">
										Past Papers
									</h2>
								</dt>
								<dd class="text-base">
									All of our past competition papers are released to the public and can be accessed immediately. Click here to access our list of past exams.
								</dd>
								</Link>
							</div>
							<div class="transition duration-300 ease-in-out max-w-md py-4 px-5 bg-white hover:shadow-2xl transform hover:-translate-y-1 hover:scale-110 rounded-xl mx-5 my-4">
								<dt>
									<h2 class="mt-2 mb-5 font-normal tracking-wide">
										Competitions
									</h2>
								</dt>
								<dd class="text-base">
									We provide four annual chemistry competitions for anyone to participate. For more information:
									<ul class="ml-0 pl-0">
										<li class="text-blue-400 mt-2" style={{"listStyle": "none"}}><Link to="competitions/competitors_guide">Competitor's Guide</Link></li>
										<li class="text-blue-400 mt-1" style={{"listStyle": "none"}}><Link to="competitions/acot">ACOT</Link></li>
										<li class="text-blue-400 mt-1" style={{"listStyle": "none"}}><Link to="competitions/wcc">WCC</Link></li>
										<li class="text-blue-400 mt-1" style={{"listStyle": "none"}}><Link to="competitions/socc">SOCC</Link></li>
										<li class="text-blue-400 mt-1" style={{"listStyle": "none"}}><Link to="compeitions/scho">SChO</Link></li>
									</ul>
								</dd>
							</div>
							<div class="transition duration-300 ease-in-out max-w-md py-4 px-5 bg-white hover:shadow-2xl transform hover:-translate-y-1 hover:scale-110 rounded-xl mx-5 my-4">
								<dt>
									<h2 class="mt-2 mb-5 font-normal tracking-wide">
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

		</Base>
	)
}

export const query = graphql`
	query {
		allYoutubeVideo(sort: {publishedAt: DESC}) {
			nodes {
				title
				videoId
				publishedAt(formatString: "DD MMM YYYY")
			}
		}
	}
`