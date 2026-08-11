import { useState } from 'react'
import { Preloader } from '@/components/preloader/Preloader'
import { Navigation } from '@/components/navigation/Navigation'
import { Hero } from '@/components/hero/Hero'
import { BrandStatement } from '@/components/sections/BrandStatement'
import { CreateConnectBecome } from '@/components/sections/CreateConnectBecome'
import { SelectedStories } from '@/components/sections/SelectedStories'
import { Services } from '@/components/sections/Services'
import { NightSection } from '@/components/sections/NightSection'
import { BrandingSection } from '@/components/sections/BrandingSection'

const PRELOADED_KEY = 'ma-preloaded'

function App() {
  const [showPreloader, setShowPreloader] = useState(
    () => !sessionStorage.getItem(PRELOADED_KEY),
  )

  function handlePreloaderComplete() {
    sessionStorage.setItem(PRELOADED_KEY, '1')
    setShowPreloader(false)
  }

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      <main>
        <Navigation />
        <Hero />
        <BrandStatement />
        <CreateConnectBecome />
        <SelectedStories />
        <Services />
        <NightSection />
        <BrandingSection />
      </main>
    </>
  )
}

export default App
