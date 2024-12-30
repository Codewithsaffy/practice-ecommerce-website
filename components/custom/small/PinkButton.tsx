import React from 'react'

const PinkButton = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <button className={`${className}  rounded-sm text-[#FAFAFA] px-12 py-4`}>{children}</button>
  )
}

export default PinkButton