import React from 'react'
import '../Styles/Nav.css'
import FontAwesome from 'react-fontawesome'

export default function Nav(){
  return(
    <div className="Nav">
      <span>Raul Lopez Luna</span>
      <span><FontAwesome name='github'/> </span>
      <span><FontAwesome name='linkedin'/> </span>
      <span>Resume</span>
    </div>
  )
}
