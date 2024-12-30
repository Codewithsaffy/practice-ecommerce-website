import { BenefitsOfWebsiteData } from '@/data/home/BenefitsOfWebsite'
import React from 'react'

const BenefitsSection = () => {
  return (
    <section className='flex items-center gap-[88px] justify-center py-12'>
      {
        BenefitsOfWebsiteData.map((item, index) => {
          return (
            <div key={item.text} className='flex font-poppins flex-col gap-6 items-center'>
              <div className='h-20 w-20 bg-[#F5F5F5] rounded-full flex items-center justify-center'>
                <div className='bg-black text-white p-2 rounded-full flex items-center justify-center'>
                  {item.icons}
                </div>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <h4 className='text-xl font-semibold'>{item.text}</h4>
                <p className='text-sm'>{item.subText}</p>
              </div>
            </div>
          )
        })
      }
    </section>
  )
}

export default BenefitsSection