import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'


const Header = () => {
  return (
    <header className='header'>
        <h1 > Task tracker </h1>
        <Button color='green' text ='Add' ></Button>     
    </header>
      
    
  )
}

Header.defaultProps ={
  title:'Task Tracker',
  }
  
  Header.propTypes ={
   title: PropTypes.string.isRequired,
  }

export default Header
