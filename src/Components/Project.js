import React from 'react'
import '../Styles/Project.css'
import FontAwesome from 'react-fontawesome'

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
      <div className="title">
        <h3>{props.title}</h3>
        <div className="flexWrapper">
          <div className="titleContent">
            <p>{props.role}</p>
            <p>{ props.note}</p>
          </div>
          <div className="iconCircleWrapper">
            <div className="faIcon">
              <FontAwesome name={props.img} />
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <p>{props.description}</p>
        <div>
          {getTech()}
        </div>
        <button>
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >Check out the project</a>
        </button>
      </div>
    </div>
  )
}
