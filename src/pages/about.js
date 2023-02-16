import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import elizaImg from '../images/staff/eliza 2x.png';
import ihorImg from '../images/staff/ihor.jpg';
import dillionImg from '../images/staff/dillion.jpeg';
import kwanwooImg from '../images/staff/kwanwoo 2x.png';
import nicolaiImg from '../images/staff/nicolai.jpg';
import jeremyImg from '../images/staff/jeremy 2x.png';

import Layout from '../layouts/layout'
import SEO from '../components/seo'

export default function about() {
	return (
		<Layout>
			<SEO title="about" />
			<StaticImage src="../images/banners/about.png" placeholder="blurred"/>

			<h1>Staff and Contacts</h1>
			<hr/>
			<p>If you need to contact CODS as a whole (for sponsorships, questions, problems, concerns, etc.) please use our official email: chemolyds@gmail.com.</p>

			<h2>Active Staff Members</h2>
			{activeStaff.map(staff => 
				<div class="mb-3 pb-3">
					<h3 class="mb-2">{staff.name}</h3>
					<div class="md:grid md:grid-cols-3 md:gap-4 mt-2">
						<div><img src={staff.img} placeholder="blurred" alt={staff.name}/></div>
						<div class="md:col-span-2">
							<p>{staff.bio.join(' ')}</p>
							<p><b>CODS Sectors:</b> {staff.sectors}</p>
						</div>
					</div>
				</div>
			)}

			<h2>Inactive Staff Members</h2>
			<table>
				<tr>
					<th>Staff Member</th>
					<th>Contact Information</th>
					<th>Additional Information</th>
				</tr>
				<tr>
					<td>Alec Zhu</td>
					<td>Discord: apc1234567#2989</td>
					<td>IChO Gold ('19 and '20 Camper)</td>
				</tr>
				<tr>
					<td>Anugrah Chemparathy</td>
					<td>Discord: llamachemist#3917</td>
					<td>IChO Gold ('19 and '20 Camper)</td>
				</tr>
			</table>

			<h2>Retired Staff Members</h2>
			<table>
				<tr>
					<th>Staff Member</th>
					<th>Contact Information</th>
				</tr>
				<tr>
					<td>Philip Jeong</td>
					<td>Discord: burts bees cucumber mint#2331</td>
				</tr>
				<tr>
					<td>Dan Ni</td>
					<td>Discord: dan.k.memes#5912</td>
				</tr>
			</table>

			<h2>Competitions Writers</h2>
			<ul>
				{writers.map(writer => 
					<li>{writer}</li>	
				)}
			</ul>

			<h1>ISO Discord Network</h1>
			<hr/>
			<p>
				We are a part of the International Science Olympiads Discord Network (ISODN).
				You can join our services and websites with their respective links below:
			</p>
			<table>
				<tr>
					<th>Science Olympiads</th>
					<th>Discord Link</th>
					<th>Website Link</th>
				</tr>
				{serverLinks.map(server =>
					<tr>
						<td>{server.name}</td>
						<td><Link to={server.discord} class="text-blue-400">Link</Link></td>
						<td>{server.website ? <Link to={server.website} class="text-blue-400">Link</Link> : "None"}</td>
					</tr>
				)}
			</table>

		</Layout>
	)
}

const writers = [
	'Ihor Kholomieiev',
	'bluepianist#929',
	'Lasse Johnson',
	'Lin Bigom-Eriksen',
	'Anathan Sadagopan',
	'Ron Shprints',
	'Qiyang Zhao',
	'Nick Ouyang',
	'Nick Tsao',
	'Thomas Falkenberg',
	'Tomasz Ślusarczyk'
]

const serverLinks = [
	{
		name: 'Chemistry Olympiads',
		discord: 'https://discord.gg/chemistryolympiad',
		website: 'https://chem.isodn.org'
	},
	{
		name: 'ISO Discord Network',
		discord: 'https://discord.gg/k3zkD2y'
	},
	{
		name: 'Mathematical Olympiads',
		discord: 'https://discord.gg/3sbwZdh',
		website: 'https://mathematics.isodn.org/'
	},
	{
		name: 'Physics Olympiad',
		discord: 'https://discord.gg/wyGAa49',
		website: 'https://physoly.tech/'
	},
	{
		name: 'Earth Science Olympiads',
		discord: 'https://discord.gg/ujvMHFV'
	},
	{
		name: 'Astronomy Olympiads',
		discord: 'https://discord.gg/8DJrk78'
	},
	{
		name: 'Biology Olympiads',
		discord: 'https://discord.gg/AzCQYY7'
	},
	{
		name: 'Linguistics Olympiads',
		discord: 'https://discord.gg/8RVtshPPTh'
	}
]

const activeStaff = [
	{
		name: 'Elizabeth Davis (AyameElizaSuzuki#6175), USA',
		img: elizaImg,
		bio: [
			`Elizabeth leads CODS's Outreach initiative and has run its online community since 2019.`,
			`She is currently studying Pharmaceutical Studies at The Ohio State University and is an avid Buckeye fan.`,
			`In her free time, she enjoys singing, gaming, working out, and volunteering.`,
			`You can often find her hanging out in the CODS Discord so please stop by! `,
		],
		sectors: 'Outreach, Competition administration, Discord'
	},
	{
		name: 'Ihor Kholomieiev (Igeru#8910), Ukraine',
		img: ihorImg,
		bio:	[
			`An avid competition writer since Fall 2021, Ihor first joined the staff team in 2022.`,
			`He is an IChO 2021 silver medalist and received multiple awards in his national olympiad.`,
			`He was a student in the National University of Kyiv where he did research in organic chemistry before transferring to the University of Groningen.`,
			`Aside from chemistry, he enjoys cooking and watching random YouTube videos.`,
		],
		sectors: 'Lectures',
	},
	{
		name: 'Dillion Lim (TheOrangeJuice#8426), Singapore',
		img: dillionImg,
		bio:	[
			`Dillion started off his journey with research in environmental chemistry, going so far as to participate in the International Science and Engineering Fair (ISEF).`,
			`He has ventured into Chemistry Olympiads and helps to mentor students. He also enjoys writing questions - you will see him writing a fair few questions in CODSCompetitions.`,
			`He firmly believes in the need for equitable access to quality resources, and thereby joined CODS in 2022 to help realise this dream for others.`,
			`Aside from chemistry, he enjoys programming and playing the piano.`,
		],
		sectors: 'Resources',
	},
	{
		name: 'Kwanwoo Park (fizzest#0001), USA',
		img: kwanwooImg,
		bio:	[
			`I'm a mysterious person`
		],
		sectors: 'Organizational Head',
	},
	{
		name: 'Nicolai Bogø Stabell (Stabell#6680), Denmark',
		img: nicolaiImg,
		bio:	[
			`Nicolai joined the staff team in 2020 as a competitions writer and later became head of competitions in 2021.`,
			`He has a background in physical chemistry from Technical University of Denmark where he also did research.`,
			`Besides CODS, he also mentors students in The Danish Chemistry Olympiad and has produced the highest number of national team members.`,
			`In his free time, he enjoys skiing, gaming and puzzles.`,
		],
		sectors: 'Competitions, Writers, and Organization Administration.',
	},
	{
		name: 'Jeremy Tinana (Jerdan1980#8056), USA',
		img: jeremyImg,
		bio:	[
			`Jeremy was part of CODS's initial admin team of 2018, and now works mainly on updating and maintaining the website and discord features.`,
			`He has bachelor degrees in (generalized) Chemistry and Computer Science from the University of Florida.`,
			`Aside from chemistry, Jeremy is a passionate reader, gamer, and cook.`,
		],
		sectors: 'Software Development',
	},
];