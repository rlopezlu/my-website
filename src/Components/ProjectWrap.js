import React from 'react'
import Project from './Project'
import '../Styles/ProjectWrap.css'

export default function ProjectWrap(){
  let myProjects = [
    {
      title: "Smart Irrigation",
      img:"",
      description:`Worked with a front end and back end team to implement a full
      stack application. `,
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
      title: "Spotlight",
      img:"",
      description:"",
      note:"UCSC Hackathon 2016",
      role:"Front End Dev",
      tech: ["Angular", 'Bootstrap' ],
      link:'https://github.com/ankur-gos/SpotlightWeb'
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
      description:`How many words can you type per minute? Find out in this
      typing test.`,
      note:"Side Project",
      role:"Web Dev",
      tech: ["React", 'express', 'nodejs' ],
      link:"https://rlopezlu.github.io/typing-speed-test/"
    },
    {
      title: "Weather SMS",
      img:"",
      description:`Send a text to my node server, to receive a text with the
      current weather.`,
      note:"Side Project",
      role:"Web Dev",
      tech: ["Twilio", 'express', 'nodejs' ],
      link:"https://github.com/rlopezlu/TwilioWeather"
    }
  ]

  return(
    <div className="project-wrap">
      {myProjects.map( project => {
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
      }
    </div>
  )
}
