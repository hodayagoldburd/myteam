import { MainSection } from '../cmp/MainSection'
import { Testimonials } from '../cmp/Testimonials'
import { Header } from '../cmp/Testimonials'
import { CTA } from '../cmp/CTA'

export function Home() {
  return (
    <main>
      <MainSection />
      <Testimonials />
      <CTA />
    </main>
  )
}
