import React from 'react'

import MetaHeader from '@/components/meta_header'
import BackgroundVideo from '@/components/pages/landing/background_video'
import LandingLayout from '@/components/pages/landing/landing_layout'

export default function Home () {
  return (
    <>
        <MetaHeader />
        <main>
            <BackgroundVideo />
            <LandingLayout></LandingLayout>
        </main>
    </>
  )
}
