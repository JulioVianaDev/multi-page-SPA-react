import React from 'react'
import {useParams} from 'react-router-dom';

function ProductDetail() {
  const params = useParams()
  return (
    <div>{params.id}º ProductDetail</div>
  )
}

export default ProductDetail