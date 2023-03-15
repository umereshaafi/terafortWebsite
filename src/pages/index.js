'use client'
//importing components
import { useEffect } from 'react'
import { Hero } from './(home)/Hero'
// import { Solution } from './(home)/Solution'
import { Projects } from './(home)/Projects'
import { TerafortNumbers } from '../components/TerafortNumbers'
import { Technologies } from './(home)/Technologies'
import { Awards } from './(home)/Awards'
import { usePathname } from 'next/navigation'
// home page
export default function Home() {
  return (
    <section style={{ scrollBehavior: 'smooth' }}>
      <Hero />
      {/* <Solution /> */}
      <Projects />
      <Technologies />
      <Awards />
      <TerafortNumbers />
    </section>
  )
}
