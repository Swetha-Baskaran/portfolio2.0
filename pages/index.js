import Head from 'next/head'
import Image from 'next/image'
import { RiCodeSSlashFill } from "react-icons/ri"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AboutMe from '../views/about/AboutMe'
import Contacts from '../views/contacts/Contacts'
import HeroPage from '../views/HeroPage/HeroPage'
import Projects from '../views/projects/Projects'
import Services from '../views/services/Services'
import Skills from '../views/skills/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Swetha..{`${"</>"}`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className='main'>
          <Navbar />
          <HeroPage />
          <Services />
          <AboutMe />
          <Skills />
          <Projects />
          <Contacts />
          <Footer />
      </main>
    </div>
  )
}
