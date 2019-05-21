import React, {Component} from 'react'

import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotals from './CartTotals'



import {ProductConsumer} from '../../Context'

export default class Cart extends Component{

  constructor(){
    super()
  }
  
  render(){
    return(
      <ProductConsumer>
        {value =>{
          const {cart} = value
          if(cart.length>0) {
            return(
              <React.Fragment>
                <Title name="your" title="cart"/>
                <CartColumns />
                <CartList value={value}/>
                <CartTotals value={value} history={this.props.history}/>
              
              </React.Fragment>
              
          )} else {
            return(
            <EmptyCart/>
            )
            
          }
        }}
         
      </ProductConsumer>
      )
  }
}