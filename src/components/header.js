import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, {useState} from 'react'


const Menu = {display: 'inline',
  color: 'white',
  textAlign: 'center',
  padding: '14px 16px',
  textDecoration: 'none',
  float: 'right',
  position:'relative'
}

const dropdown = {
  boxShadow: "2px 2px 10px #ccc",
  textAlign: 'left',
  padding: "14px",
  color:"black",
  float: 'right', 
  position:"absolute",
  background:"white",
  border:"0px solid red",
  borderRadius:"12px",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  top:"40px",
  maxWidth:"200px",
  maxHeight: "120px"
}



const Header = function({ siteTitle }) {
  {/*handles mouseover for the menus*/}
  const [isShownFAQ, setIsShownFAQ] = useState(false);
  const [isShownCourses, setIsShownCourses] = useState(false);
  const [isShownGuides, setIsShownGuides] = useState(false);
  const [isShownAbout, setIsShownAbout] = useState(false);

  return (
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
      <h1 id="test-id" style={{display: 'inline', margin: 0, marginRight: 10 }}>
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
				{/* It goes right to left */}
        {/*there are menus commented out for each of the links if we need to add them in in the future*/}
				<li style={{display: 'inline'}}>
          <div style={Menu} onMouseLeave={() => setIsShownAbout(false)}>
            {/*isShownAbout && (
              <div style={dropdown}>
                <p>Put Links here</p>
                <p>Link 2</p>
                <p>Link 3</p>
              </div>)
            */}
            <Link to="/about" onMouseEnter={() => setIsShownAbout(true)}>About</Link>
          </div>    
        </li>

				<li style={{display: 'inline'}}>
          <div style={Menu} onMouseLeave={() => setIsShownFAQ(false)}>
            {/*isShownFAQ && (
              <div style={dropdown}>
                <p>Put Links here</p>
                <p>Link 2</p>
                <p>Link 3</p>
              </div>)
            */}
            <Link to="/FAQ" onMouseEnter={() => setIsShownFAQ(true)}>FAQ</Link>
          </div>
        </li>

				<li style={{display: 'inline'}}>
          <div style={Menu} onMouseLeave={() => setIsShownGuides(false)}>
            {/*isShownGuides && (
              <div style={dropdown}>
                <p>Put Links here</p>
                <p>Link 2</p>
                <p>Link 3</p>
              </div>)
            */}
            <Link to="/guides" onMouseEnter={() => setIsShownGuides(true)}>Guides</Link>
          </div>
        </li>
				<li style={{display: 'inline'}}>
          <div style={Menu} onMouseLeave={() => setIsShownCourses(false)}>
            {isShownCourses && (
              <div style={dropdown}>
                <Link style={{margin:"3px"}} to="/courses/Bronze">Bronze</Link>
                <Link style={{margin:"3px"}} to="/courses/Silver">Silver</Link>
                <Link style={{margin:"3px"}} to="/courses/Gold">Gold</Link>
              </div>)
            }
            <Link to="/courses" onMouseEnter={() => setIsShownCourses(true)}>Courses</Link>
          </div>
        </li>
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
