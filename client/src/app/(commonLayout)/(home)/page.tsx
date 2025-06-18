import Brands from '@/components/modules/home/Brands';
import { EmergencyServices } from '@/components/modules/home/EmergencyServices';
import FAQ from '@/components/modules/home/FAQ';
import HomeBanner from '@/components/modules/home/HomeBanner';
import HomeGallery from '@/components/modules/home/HomeGallery';
import LatestBlog from '@/components/modules/home/LatestBlog';
import PopularBrands from '@/components/modules/home/PopularBrands';
import PopularCategories from '@/components/modules/home/PopularCategories';
import { PricingPlan } from '@/components/modules/home/PricingPlan';
// import ServiceMarquee from '@/components/modules/home/ServiceMarquee';
import { Testimonials } from '@/components/modules/home/Testimonials';
import { TopServiceCategory } from '@/components/modules/home/TopServiceCategory';
// import TopCategories from '@/components/modules/home/TopCategories';
import TrendingItems from '@/components/modules/home/TrendingItems';
import WorkProcess from '@/components/modules/home/WorkProcess';

export default function Home() {
  return (
    <div>
      <HomeBanner />
      {/* <ServiceMarquee /> */}
      <EmergencyServices />
      <TopServiceCategory />
      {/* <TopCategories /> */}
      <TrendingItems />
      <PopularCategories />
      <PopularBrands />
      <WorkProcess />
      <PricingPlan />
      <FAQ />
      <Testimonials />
      <LatestBlog />
      <HomeGallery />
      <Brands />
    </div>
  );
}
