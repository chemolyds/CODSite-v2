import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const navlink = {
	display: 'inline',
	color: 'white',
	textAlign: 'center',
	padding: '14px 16px',
	textDecoration: 'none',
	float: 'right'
}

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{display: 'inline', margin: 0, marginRight: 10 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
			<ul style={{display: 'inline', listStyleType: 'none', margin: 0, padding: 0}}>
				<li style={{display: 'inline'}}><Link to="/about" style={navlink}>About</Link></li>
			</ul>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
