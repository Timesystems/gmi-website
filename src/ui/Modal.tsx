"use client"
import React, { useState } from 'react'
import { ModalLayout } from './Layouts'
import { VolunteersBanner, VolunteersForm } from './Volunteer'
import { IoClose } from "react-icons/io5";
import { HeadingTitle } from './Elements';

export function VolunterModal() {

    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = (e) => {
        setIsOpen(e)
    }
    return (

        <>
            <button
                // href='#'
                className='btn inline-block rounded-full border border-primary-500 bg-primary-500 px-6 py-2 font-heading text-white hover:text-white'
                onClick={() => handleToggle(true)}
            >
                Sign Up Now
            </button>
            <ModalLayout isOpen={isOpen} handleModalStatus={(e) => handleToggle(e)} modalSize={"max-w-[1024px]"} classname='rounded-[1.25rem] overflow-x-hidden' >
                <div className='flex item-center' >
                    {/* col one */}
                    <div className="hidden md:block w-full max-w-[36.25rem] relative min-h-full  volunterBg ">
                        <VolunteersBanner position='left-1/2 -translate-x-1/2 bottom-10' />
                    </div>

                    {/* col 2 */}
                    <div className="w-full px-5 py-10 md:px-10 md:py-6 relative">
                        {/* close Button */}
                        <button className="absolute md:right-10 right-5 md:top-5 top-5 w-7  h-7 md:w-10 md:h-10 bg-primary-50 rounded-full flex items-center justify-center z-10" onClick={() => handleToggle(false)}>
                            <IoClose className=" text-base md:text-[1.15rem]" />
                        </button>

                        {/* title section */}

                        <div className="">


                            <HeadingTitle className='before:content-["Volunteer"]'>
                                Sign Up to Become a Volunteer
                            </HeadingTitle>
                        </div>

                        <div className=" mt-5 md:mt-5">
                            <VolunteersForm />
                        </div>

                    </div>
                </div>
            </ModalLayout>
        </>
    )
}

