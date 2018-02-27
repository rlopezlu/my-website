import React from 'react'
import Project from './Project'

export default function ProjectWrap(){
  let myProjects = [
    {
      title: "Smart Irrigation",
      img:"",
      description:"",
      role:"Front End Developer",
      tech: ["js", 'vue' ],
      note: "CMPS 116-117 - Senior Project",
      link: ""
    },
    {
      title: "Quest Journal",
      img:"",
      description:"",
      role:"Android Dev",
      tech: ["Android Studio", 'Firebase' ],
      note: "CMPS 121 - Mobile Apps",
      link: "https://github.com/jasonou/Quest-Journal"
    },
    {
      title: "Space",
      img:"",
      description:"",
      role:"Team Lead, Mobile JS dev",
      note:"CMPS 115 - Intro to Software Engineering",
      tech: ["React Native", 'Firebase' ],
      link:"https://github.com/joshuapena/space-mobile"
    },
    {
      title: "Pantry",
      img:"",
      description:"",
      note:"UCSC Hackathon 2015",
      role:"",
      tech: ["Angular", 'Bootstrap' ]
    },
    {
      title: "League Of Legends Match History",
      img:"",
      description:"",
      note:"Side Project",
      role:"Web Dev",
      tech: ["React", 'express', 'nodejs' ],
      link:"https://rlopezlu.github.io/league-history/"
    },
    {
      title: "Typing Speed Test",
      img:"",
      description:"",
      note:"Side Project",
      role:"Web Dev",
      tech: ["React", 'express', 'nodejs' ],
      link:"https://rlopezlu.github.io/typing-speed-test/"
    }
  ]

  return(
    myProjects.map( project => {
      return <Project
        key={project.title}
        title={project.title}
        img={project.img}
        description={project.description}
        role={project.role}
        tech={project.tech}
        note={project.note}
        link={project.link}
      />
    })
  )
}
