import React from 'react'
import { useNavigate } from 'react-router-dom'
import {  ShimmerPostList } from 'react-shimmer-effects'

export default function ShimmerEffect() {
 
  return (<>      
    
  <div style={{ width: '100vw', height: '100vh' }}>
  <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />
</div>
   
  </>)
}
