import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from  '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#b94666",
  fontWeight: "bold",
  fontSize: 16,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const wipStyle = {
  color: "#fff",
  backgroundColor: "#f16e51",
  border: "1px solid #f16e51",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const techBadgeStyle = {
  color: "#fff",
  backgroundColor: "#5f5aa2",
  border: "1px solid #5f5aa2",
  opacity: .5,
  fontSize: 8,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const subLinkStyle = {
  color: "#5f5aa2",
  fontSize: ".5em",
  fontWeight: 'bold',
  letterSpacing: 1,
  position: "relative",
  top: -2,
  marginRight: 5,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Write Like The Wind",
    url: "https://aaronbrunet.dev/write-sprinter/",
    description:
      "Write Like The Wind was written to facilitate writing sprints, such as for a creative writing class, blogging, journaling, or a competition like NaNoWriMo - in fact, the impetus for the project was the sad attempts at manual timekeeping and word-tracking for a NaNoWriMo writing group. Choose the length of time, click 'Start', and get writing!",
    color: "#1099A8",
    github: 'https://github.com/aaronbrunet/write-sprinter',
    tech: ['React','Tailwind CSS']
  },
  {
    text: "Do The Write Thing",
    url: "",
    description:
      `Do The Write Thing is a writing progress tracker written to augment NaNoWriMo progress. Users can enter a goal, track their daily progress, and view the overall progress of their project, and see updates realtime. This effort is still in progress, but on the backburner.`,
    color: "#1099A8",
    github: 'https://github.com/aaronbrunet/dowritething',
    tech: ['React','Tailwind CSS','Firebase'],
    wip: true
  },
  {
    text: "R&ller: Prepare To Die",
    url: "https://aaronbrunet.dev/prepare-to-die/",
    description:
      "R&ller was an introductory experiment into the world of React. Built to act as a dice roller for a tabletop game like D&D, R&ller aimed to provide every kind of dice used, as well as modifiers.",
    color: "#E95800",
    github: "https://github.com/aaronbrunet/prepare-to-die",
    tech: ['React','styled-components']
  },
  {
    text: "aaronbru.net / aaronbrunet.dev",
    url: "https://aaronbru.net",
    description:
      "A personal portfolio site to showcase my experience, projects, hobbies, and more.",
    color: "#1099A8",
    github: 'https://github.com/aaronbrunet/aaronbrunet.github.io',
    tech: ['React','Gatsby','Tailwind CSS'],
    wip: true
  },  
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 className='title'>
          <a className='gradient' href="https://aaronbrunet.dev">{'<'}aaronbrunet.dev{'/>'}</a>
        </h1>      
      <p className='description'>
      Developer based in Orlando, Florida. Special interest in emerging technologies and the changing face of the web.
      </p>

      <div className='links'>
          <a href="https://github.com/aaronbrunet" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/aaronwbrunet/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      </div>

      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`} target='_blank'
              >
                {link.text}
              </a>
              {link.wip && (
                <span style={wipStyle} aria-label={"WIP"}>
                WIP
              </span>
              )}
              {link.tech?.map(tech=>(
                <span style={techBadgeStyle} aria-label={"Badge"}>
                {tech}
              </span>
              ))}   
              <p style={descriptionStyle}>{link.description}</p>  
              {link.url !== '' && (<a
                style={subLinkStyle}
                href={`${link.url}`} target='_blank'
              >
                Project<FontAwesomeIcon icon={faLink} />
              </a>)}
              {link.github && (
                <a style={subLinkStyle} href={`${link.github}`} target='_blank'>
                  GitHub<FontAwesomeIcon icon={faLink} />
                </a>
              )}            
            </span>
          </li>
        ))}
      </ul>
      <h1 className=''>Check out my <a style={linkStyle} href="https://github.com/aaronbrunet">GitHub</a> to see what else I'm working on!</h1>
      <footer className='footer'>
        <a
          href="https://aaronbru.net"
          target="_blank"
          rel="noopener noreferrer"
        >          
          Aaron Brunet © {new Date().getFullYear()}
        </a>
      </footer>
    </main>
    
  )
}

export default IndexPage
