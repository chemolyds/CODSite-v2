import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Layout from './layout.js'

const FAQ = ({ children, pageContext }) => (
	<Layout>
		<div class="grid grid-cols-2">
			<div class="relative">
				<h1>{pageContext.frontmatter.title}</h1>
			</div>
			<div class="relative text-right text-purple-700">
				<h1><Link to="/FAQ" class="">Back</Link></h1>
			</div>
		</div>
		<div>
			{children}
		</div>
	</Layout>
)

FAQ.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FAQ