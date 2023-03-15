'use client'
//importing components
import { Hero } from '../pagesComponents/(home)/Hero/Hero'
import { Solution } from '../pagesComponents/(home)/Solution'
import { Projects } from '../pagesComponents/(home)/Projects'
import { TerafortNumbers } from '../components/TerafortNumbers'
import { Technologies } from '../pagesComponents/(home)/Technologies'
import { Awards } from '../pagesComponents/(home)/Awards'

// home page
export default function Home() {
  return (
    <section style={{ scrollBehavior: 'smooth' }}>
      <Hero />
      <Solution />
      <Projects />
      <Technologies />
      <Awards />
      <TerafortNumbers />
    </section>
  )
}
