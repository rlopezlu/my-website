import React from 'react'
import '../Styles/Project.css'

// TODO: replace alt with value
export default function Project(props){
  function getTech(){
    return props.tech.map( (item, index) => {
      return <span key={item}>
        {item + (index === props.tech.length -1 ? " " : " - ")}
      </span>
    })
  }
    return(
    <div className="project">
      {/* <img src="" alt="placeholder"/> */}
      {/* <p className="title">{props.title}</p> */}
      <div className="title">
        <h3>{props.title}</h3>
        <p>{props.role}</p>
        <p>{props.note}</p>
      </div>
      <div className="content">
        <p>{props.description}</p>
        <div>
          {getTech()}
        </div>
        <a href={props.link}>Check out the project</a>
      </div>
    </div>
  )
}
