import React from 'react'
import Base from './base.js'
import './layout.css'

const Layout = ({ children }) => (
  <Base>
		<div
			style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '0px 1.0875rem 1.45rem',
				paddingTop: 0,
			}}
		>
			{children}
		</div>
	</Base>
)

export default Layout
