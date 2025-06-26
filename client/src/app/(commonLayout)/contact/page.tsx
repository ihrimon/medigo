import Appointment from '@/components/modules/contact/Appointment';
import BranchLocations from '@/components/modules/contact/BranchLocations';
import { EmergencyServices } from '@/components/modules/home/EmergencyServices';
import PageBanner from '@/components/shared/PageBanner';

const ContactPage = () => {
  return (
    <div className='bg-background'>
      <PageBanner />
      <BranchLocations />
    <Appointment />
      <EmergencyServices />
    </div>
  );
};

export default ContactPage;
