import { AboutMeBlurb } from '@/components/aboutMeBlurb/aboutMeBlurb'
import { AppBarMain } from '@/components/appBarMain/appBarMain'
// import { Introduction } from '@/components/introduction/introduction'
import { ProjectGrid } from '@/components/projectGrid/projectGrid'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AboutMePage from './aboutMe'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppBarMain />
      <Component {...pageProps} />
    </>
  )
}
