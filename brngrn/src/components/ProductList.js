import React, {Component} from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer}  from '../Context'

class ProductList extends Component{

   
  
//<Product/>  
  render(){
    return(
      <React.Fragment>
        <div className='py-5'>
          <div className='container'>
            <Title name='our' title='products'></Title>
            
            <div className='row'>
              <ProductConsumer>
                {(data)=>{
                  return data.products.map(product => {
                    return <Product key={product.id} product={product} 
                            />
                  })
                }}
              </ProductConsumer>  
            </div>
          </div>
        </div>
      </React.Fragment>      
      )
  }
}

export default ProductList;