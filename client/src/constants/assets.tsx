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