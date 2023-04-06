import React from 'react'
import NavBar from '../components/NavBar'
import Resume from '../components/Resume'
import Skill from '../components/Skill'
import WorkExperience from '../components/WorkExperience'
import Portfolio from '../components/Portfolio'

export default function HomePage() {
  return (
    <>
    <NavBar/>
    <Resume/>
    <Skill/>
    <Portfolio/>
    <WorkExperience/>
    </>
  )
}
