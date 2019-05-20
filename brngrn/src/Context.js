import React,{createContext, Component} from 'react'

import {storeProducts, detailProduct} from './data'

const ProductContext = createContext();
/*

 "react-router": "^4.4.0",
    "react-router-dom": "^4.4.0",
*/
//Provider --> return all the children it envolve
class ProductProvider extends Component{
  constructor(){
    super();
    this.state={
      products: [],//storeProducts,
      detailProduct: detailProduct,
      cart:[],//storeProducts,//[],
      modalOpen: false,
      modalProduct: detailProduct,
      //cart properties
      cartSubTotal:0,
      cartTax:0,
      cartTotal:0,
    } 
    this.handleDetail = this.handleDetail.bind(this)
    this.addToCart = this.addToCart.bind(this)
  }
  
  componentDidMount(){
    this.setProducts();
    //function is to not modify the values 
  }
  
   setProducts=() =>{
    let tempProducts = []
    storeProducts.forEach(item =>{
      const singleItem = {...item}
      tempProducts = [...tempProducts, singleItem]
    })
    this.setState(()=>{
      return {products: tempProducts}
    })
  }
   
  getItem = (id) =>{
    const product = this.state.products.find(item => item.id === id)
    return product
  }
  
  handleDetail = (id) =>{
    console.log('hello from detail')
    const product = this.getItem(id)
    this.setState(()=>{
      return {detailProduct: product}
    })
  }
  
  addToCart = (id) =>{
    console.log(`hello from add to cart.id ${id}`)
    const tempProducts = [...this.state.products]
    //nos devuelve el index del objeto en el array, asi no se cambia l ui
    const index = tempProducts.indexOf(this.getItem(id))
    const product = tempProducts[index]
    product.inCart = true
    product.count = 1
    const price = product.price
    product.total = price
    
    this.setState(()=>{
      return {products: tempProducts,
              cart: [...this.state.cart, product]
             }
    }, ()=>{
      this.addTotals()
      console.log(this.state)
    })
  }
  
  openModal = id =>{
    const product = this.getItem(id)
    this.setState(()=>{
      return {modalProduct: product, modalOpen: true}
    })
  }
  
  closeModal = () =>{
    //const product = this.getItem(id)
    this.setState(()=>{
      return {modalOpen: false}
    })
  }
  
  
  //cart methods
  increment = (id) =>{
    console.log('increment method')
    let tempCart = [...this.state.cart]
    const selectedProduct = tempCart.find(item => item.id === id)
    
    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]
    
    product.count = product.count + 1
    product.total = product.price * product.count
    
    this.setState(()=>{
      return{
        cart: [...tempCart]
      }
    }, ()=>{
      this.addTotals()
    })
  }
  
  decrement = (id) =>{
    console.log('decrement method')
    let tempCart = [...this.state.cart]
    const selectedProduct = tempCart.find(item => item.id === id)
    
    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]
    
    product.count = product.count - 1
    
    if(product.count === 0){
      this.removeItem(id)
    }else{
      product.total = product.price * product.count    
      this.setState(()=>{
        return{
          cart: [...tempCart]
        }
      }, ()=>{
        this.addTotals()
      })
    }
    
  }
  
  removeItem = (id) =>{
    console.log('remove method')
    let tempProducts = [...this.state.products]
    let tempCart = [...this.state.cart]
    
    tempCart = tempCart.filter(item => id !== item.id)
    
    const index = tempProducts.indexOf(this.getItem(id))
    let removedProduct = tempProducts[index]
    //change few propertes on it
    removedProduct.inCart = false
    removedProduct.count = 0
    removedProduct.total = 0
    
    this.setState(()=>{
      return{
        cart:[...tempCart],
        products:[...tempProducts]
      }
    },()=>{
      this.addTotals()
    })
    
  }
  
  clearCart = () =>{
    console.log('cart was cleared')
    this.setState(()=>{
      return {cart:[]}
    },()=>{
      this.setProducts()
      this.addTotals()
    })
  }
  
  addTotals = () =>{
    let subTotal = 0
    this.state.cart.map(item => (subTotal += item.total))
    
    const tempTax = subTotal * 0.1 //10% tax
    const tax = parseFloat(tempTax.toFixed(2))
    const total = subTotal + tax
    
    this.setState(()=> {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      }
    })
    
  }
  
  render(){
    return(
      <ProductContext.Provider value={{        
        ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}>
        {this.props.children}
      </ProductContext.Provider>
      )
  }
}

//create the consumer
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};