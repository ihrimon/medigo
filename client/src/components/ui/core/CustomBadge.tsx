import React, { ReactNode } from 'react'

const CustomBadge = ({icon, text, className}: {icon:ReactNode, text:string, className: string}) => {
  return (
    <div className='inline-block'>
      <div
        className={`flex gap-2 rounded-full items-center px-3 py-1 mb-5 ${className}`}
      >
        <span>{icon}</span>
        <h4>{text}</h4>
      </div>
    </div>
  );
}

export default CustomBadge