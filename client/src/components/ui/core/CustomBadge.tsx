import { BadgeImage } from '@/constants/assets';

const CustomBadge = ({text}: {text:string}) => {
  return (
      <div className='flex items-center gap-2 mb-3'>
        <span>
          <BadgeImage />
        </span>
        <h4 className='text-primary text-lg font-semibold'>{text}</h4>
      </div>
  );
}

export default CustomBadge