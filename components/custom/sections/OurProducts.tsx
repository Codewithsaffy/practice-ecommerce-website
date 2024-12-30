import { OurProductData } from '@/data/home/OurProduct';
import React from 'react'
import SideBox from '../small/SideBox';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import ProductCard from '../small/ProductCard';
import PinkButton from '../small/PinkButton';

const OurProducts = () => {
  return (
    <section className="py-12" >
    {/* Header of Todays */}
    <div className="flex line-clamp-1items-center gap-2">
      <SideBox />
      <p className="font-semibold text-[#DB4444]">{OurProductData.title}</p>
    </div>
    <div className="flex mt-6 justify-between ">
        <h3 className="font-semibold text-4xl leading-[48px]">
          {OurProductData.MainHeading}
        </h3>
      <div className="flex items-center gap-2">
        <button className="bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex items-center justify-center">
          <FaArrowLeftLong size={16} className="" />
        </button>
        <button className="bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex items-center justify-center">
          <FaArrowRightLong size={16} className="" />
        </button>
      </div>
    </div>

    {/*  card section */}
    <div className='grid grid-cols-4 gap-4 mt-12'>
        {
          OurProductData.cardItems.map((item, index) => {
            return (
              <ProductCard key={index} cardData={item} />
            )
          })
        }
      </div>
      <div className=" text-center mt-12 mx-auto w-full ">
      <PinkButton className="bg-[#DB4444]" children={OurProductData.buttonText.text}/>

      </div>

  </section>
  )
}

export default OurProducts