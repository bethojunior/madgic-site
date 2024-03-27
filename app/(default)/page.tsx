export const metadata = {
  title: 'Madgic',
  description: 'Seu negócio aos olhos do mundo',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      <Features />
      <Testimonials />
      <Newsletter />
    </>
  )
}
