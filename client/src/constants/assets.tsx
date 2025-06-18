import Image from 'next/image'

export const Heart = () => {
    return (
        <div>
            <Image src={'/assets/heart.png'} alt='Heart' height={16} width={16} />
        </div>
    )
}

export const RightArrow = () => {
    return (
        <div>
            <Image src={'/assets/right-arrow.png'} alt='Heart' height={20} width={20} />
        </div>
    )
}

export const Appointment = () => {
  return (
    <div>
      <Image
        src={'/assets/appointment.gif'}
        alt='Appointment'
        height={20}
        width={20}
      />
    </div>
  );
};

export const DoctorsBadge = () => {
  return (
    <div>
      <Image
        src={'/assets/doctors-badge.png'}
        alt='Doctors'
        height={200}
        width={200}
      />
    </div>
  );
};

export const brandImages = [
  '/assets/brands/brand-1.png',
  '/assets/brands/brand-2.png',
  '/assets/brands/brand-3.png',
  '/assets/brands/brand-4.png',
  '/assets/brands/brand-5.png',
  '/assets/brands/brand-6.png',
  '/assets/brands/brand-7.png'
]

export const BadgeImage = () => {
  return (
    <div>
      <Image
        src={'/assets/pulse.png'}
        alt='Doctors'
        height={24}
        width={24}
      />
    </div>
  );
};

export const Apostrophe = () => {
  return (
    <div>
      <Image
        src={'/assets/apostrophe.png'}
        alt='Doctors'
        height={40}
        width={40}
      />
    </div>
  );
};