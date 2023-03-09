import React from 'react'
import {useNavigate} from 'react-router-dom'
function HomePage() {
  const navigate = useNavigate('/products')

  const cliquei = ()=>{
    navigate('/products')
  }
  return (
    <>
      <h1>HomePage</h1>
      <button onClick={cliquei}>Navegar</button>
    </>
  )
}

export default HomePage
