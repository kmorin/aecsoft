import {Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import '../components/layout.scss'

const Footer = ({links})=>(
  <footer
      style={{
        padding: `1.5rem 1.08rem`,
        }}>
      <div id="footerContent">
        <div>
          <div><Link to={links[0]}>Github</Link></div>
          <div><Link to={links[1]}>Twitter</Link></div>
        </div>
        <span>© 2020, Built with <span role="img" aria-label="coffee">☕️</span> in Washington.</span>
      </div>
  </footer>
)

Footer.propTypes = {
  links: PropTypes.array,
}

Footer.defaultProps = {
  links: ["https://github.com/kmorin", "https://twitter.com/kylemorin"]
}

export default Footer