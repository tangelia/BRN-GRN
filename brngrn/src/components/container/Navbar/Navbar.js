import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {ButtonContainer} from './Button'

import logo from '../img/logo.svg'

export default class Navbar extends Component{
  
  constructor(){
    super()
  }
  
  render(){
    return(
      <NavWrapper className='navbar bg-primary navbar-expand-sma navbar-dark px-sm-5'>
        {/*https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */} 
        <Link to='/'>
          <img src={logo} alt='store' className='navbar-brand'/>
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>Products</Link>
          </li>          
        </ul>
        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
            <span className='mr-2'>
              <i className='fas fa-cart-plus'/>
            </span>
            My Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>      
      )
  }
}

const NavWrapper = styled.nav`
  background: #2272;/*var(--mainBlue)*/
  .nav-link{
    color:#f3f3f3!important;/*var(--mainWhite)*/
    font-size: 1.3rem;
    text-transform: capitalize !important;
  }