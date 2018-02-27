import React from 'react'
import '../Styles/Project.css'

// TODO: replace alt with value
export default function Project(props){
  function getTech(){
    return props.tech.map( tech => {
      return <span key={tech}> {tech} </span>
    })
  }
        return(
        <div className="project">
          {/* <img src="" alt="placeholder"/> */}
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <p>{props.role}</p>
          <div>
            {getTech()}
          </div>
          <p>{props.note}</p>
          <a href={props.link}>Check out the project</a>
        </div>
  )
}
