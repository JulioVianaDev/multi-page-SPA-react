import React from 'react'
import { Link } from 'react-router-dom'
const products = [
  {id: '1',title: 'product 1'},
  {id: '2',title: 'product 2'},
  {id: '3',title: 'product 3'}
]
function Products() {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((prod)=>(
          <li key={prod.id}>
              <Link to={`/products/${prod.id}`}>{prod.title}</Link>
            </li>
          ))
        }
          
      </ul>
    
    </>
  )
}

export default Products