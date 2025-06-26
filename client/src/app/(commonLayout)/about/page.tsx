import AboutMedigo from '@/components/modules/about/AboutMedigo'
import CoreValues from '@/components/modules/about/coreValues'
import MedigoGallery from '@/components/modules/about/Gallery'
import MedicalExperts from '@/components/modules/about/MedicalExperts'
import FAQ from '@/components/modules/home/FAQ'
import WorkProcess from '@/components/modules/home/WorkProcess'
import PageBanner from '@/components/shared/PageBanner'


const AboutPage = () => {
  return (
    <div>
      <PageBanner />
      <AboutMedigo />
      <CoreValues  />
      <WorkProcess />
      <MedicalExperts />
      <FAQ />
      <MedigoGallery />
      </div>
  )
}

export default AboutPage