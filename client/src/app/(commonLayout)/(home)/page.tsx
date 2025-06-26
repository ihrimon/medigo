import Brands from '@/components/modules/home/Brands';
import HomeBanner from '@/components/modules/home/HomeBanner';
import LatestBlog from '@/components/modules/home/LatestBlog';
import PopularBrands from '@/components/modules/home/PopularBrands';
import PopularCategories from '@/components/modules/home/PopularCategories';
import ServiceMarquee from '@/components/modules/home/ServiceMarquee';
import ServicesGallery from '@/components/modules/home/ServicesGallery';
import { Testimonials } from '@/components/modules/home/Testimonials';
import { TopServiceCategory } from '@/components/modules/home/TopServiceCategory';
import WeekDeals from '@/components/modules/home/WeekDeals';

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <ServiceMarquee />
      {/* <EmergencyServices /> */}
      <TopServiceCategory />
      <WeekDeals />
      <PopularCategories />
      <PopularBrands />
      {/* <PricingPlan /> */}
      <Testimonials />
      <LatestBlog />
      <ServicesGallery />
      <Brands />
    </div>
  );
}
