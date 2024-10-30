import React from 'react'
import '../Styles/footer.css'

const Footer = () => {
  return (
    <>
      <Footer>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TechToMe. All rights reserved.</p>
        </div>
      </Footer>
    </>
  )
}

export default Footer