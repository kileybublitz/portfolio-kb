import { AppBarMain } from '@/components/appBarMain/appBarMain'
// import { Introduction } from '@/components/introduction/introduction'
import { ProjectGrid } from '@/components/projectGrid/projectGrid'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AboutMe from '../components/aboutMe/aboutMe'
import { Sections } from '../components/sections/sections'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
