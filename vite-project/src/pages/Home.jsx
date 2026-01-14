import { MainSection } from '../cmp/MainSection'
import { Testimonials } from '../cmp/Testimonials'
import { Header } from '../cmp/Header'
import { CTA } from '../cmp/CTA'
import { PromoBlock } from '../cmp/promoBlock'

export function Home() {
  return (
    <main>
      <MainSection />
      <promoBlock />
      <Testimonials />
      <CTA />
    </main>
  )
}
