import React from 'react'
import SideBox from '../small/SideBox';
import { CategoriesData } from '@/data/home/Categories';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';

const Categories = () => {
  return (
    <section className='py-12'>
      <div className="flex items-center gap-2">
        <SideBox />
        <p className="font-semibold text-[#DB4444]">{CategoriesData.title}</p>
      </div>
      <div className="flex mt-6 items-center justify-between ">
          <h3 className="font-semibold text-4xl leading-[48px]">
            {CategoriesData.mainHeading}
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
      <div className='flex gap-[30px] mt-8'>
        {
          CategoriesData.categories.map((item, index) => {
            return (
              <Link href={item.url} key={index} className="flex font-poppins border-[1px] r border-[#0000004D] rounded-sm flex-col justify-center w-[170px] h-[145px] items-center gap-4">
                {item.icons}
                {item.text}
              </Link>
            )
          })
        }
      </div>
    </section>
  )
}

export default Categories