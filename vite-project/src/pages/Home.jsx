import { MainSection } from '../cmp/MainSection'
import { Testimonials } from '../cmp/Testimonials'
import { Header } from '../cmp/Header'
import { CTA } from '../cmp/CTA'
import { PromoBlock } from '../cmp/promoBlock'
import { SmallHeader } from '../cmp/SmallHeader'

export function Home() {
  return (
    <main>
      <SmallHeader />
      <PromoBlock />
      <MainSection />
      <Testimonials />
      <CTA />
    </main>
  )
}
