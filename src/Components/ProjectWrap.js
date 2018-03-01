import React from 'react'
import Project from './Project'
import '../Styles/ProjectWrap.css'

export default function ProjectWrap(){
  let myProjects = [
    {
      title: "Smart Irrigation",
      img:"pie-chart",
      description:`Worked with a front end and back end team to implement a full
        stack application. `,
      role:"Front End Developer",
      tech: ["js", 'Vue' ],
      note: "CMPS 116-117 - Senior Project",
      link: ""
    },
    {
      title: "Quest Journal",
      img:"list-ul",
      description:`Java programmer in group of 3. Helped design all parts of the app
        including UI, database, and flow between app pages.`,
      role:"Android Dev",
      tech: ["Android Studio", 'Firebase', 'Java'],
      note: "CMPS 121 - Mobile Apps",
      link: "https://github.com/jasonou/Quest-Journal"
    },
    {
      title: "Space",
      img:"car",
      description:`Led a team of 5 students. Created wireframes for app pages.
        Was also the lead JS programmer`,
      role:"Team Lead, Mobile JS dev",
      note:"CMPS 115 - Intro to Software Engineering",
      tech: ["React Native", 'Firebase' ],
      link:"https://github.com/joshuapena/space-mobile"
    },
    {
      title: "Spotlight",
      img:"music",
      description:`Front end dev of web app, powered by Angular. Share a
        spotify playlist on our page, and users with the link can vote on which song will play next.`,
      note:"UCSC Hackathon 2016",
      role:"Front End Dev",
      tech: ["Angular", 'Bootstrap' ],
      link:'https://github.com/ankur-gos/SpotlightWeb'
    },
    {
      title: "LoL Match History",
      img:"gamepad",
      // description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      // do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      // minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      // ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      // velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      // cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
      // note:"Side Project",
      description:`Match history for League of Legends powered by Riot Games Api.
        Different from other
        match history websites because it highlights games played with friends`,
      role:"Web Dev",
      note:"Side Project",
      tech: ["React", 'Express', 'Nodejs' ],
      link:"https://rlopezlu.github.io/league-history/"
    },
    {
      title: "Typing Speed Test",
      img:"keyboard-o",
      description:`How many words can you type per minute? Find out in this
      typing test.`,
      note:"Side Project",
      role:"Web Dev",
      tech: ["React", 'Express', 'Nodejs' ],
      link:"https://rlopezlu.github.io/typing-speed-test/"
    },
    {
      title: "Weather SMS",
      img:"sun-o",
      description:`Send a text to my node server, to receive a text with the
      current weather.`,
      note:"Side Project",
      role:"Web Dev",
      tech: ["Twilio", 'Express', 'Nodejs' ],
      link:"https://github.com/rlopezlu/TwilioWeather"
    }
  ]

  return(
    <div>
      <h2>Projects</h2>
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
    </div>
  )
}
