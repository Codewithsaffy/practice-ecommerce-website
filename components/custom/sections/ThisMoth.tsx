import React from 'react'
import SideBox from '../small/SideBox'
import { ThisMonthData } from '@/data/home/ThisMonth'
import PinkButton from '../small/PinkButton'
import ProductCard from '../small/ProductCard'

const ThisMoth = () => {
  return (
    <section className="py-12">
          <div className="flex items-center gap-2">
        <SideBox />
        <p className="font-semibold text-[#DB4444]">{ThisMonthData.title}</p>
      </div>
      <div className="flex mt-6 items-center justify-between ">
          <h3 className="font-semibold text-4xl leading-[48px]">
            {ThisMonthData.MainHeading}
          </h3>
          <PinkButton className='bg-[#DB4444]' children={ThisMonthData.buttonText.text}/>
      </div>
      <div className='flex gap-[30px] mt-12'>
        {
          ThisMonthData.cardItems.map((item, index) => {
            return (
              <ProductCard key={index} cardData={item} />
            )
          })
        }
      </div>
    </section>
  )
}

export default ThisMoth